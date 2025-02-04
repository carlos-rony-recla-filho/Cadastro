import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViacepService } from '../../service/viacep.service';
import { UserService } from '../../service/user.service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-cadastro',
  standalone: false,
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private viacepService: ViacepService, private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.initializeForm();
    this.obsevePreenchimentoCep();
    this.buscarCep();
  }

  initializeForm(){
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required] ],
      data: ['', [Validators.required,Validators.max(2007)] ],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['',[Validators.required]],
      estado: ['',[Validators.required]],
    })
  }

  obsevePreenchimentoCep(){
    this.form.get('cep')?.valueChanges.subscribe(value =>{
      if (value?.length == 8) {
        this.buscarCep();
      }
    })
  }

  buscarCep(){
    var cep = this.form.get('cep')?.value;
    this.viacepService.getEnderecoByCep(cep).subscribe({

      next: (response) => {
        this.form.patchValue({
          logradouro: response.logradouro,
          bairro: response.bairro,
          cidade: response.localidade,
          estado: response.uf,
        })
      },
      error: () => {
        console.log("Erro no Formulário")
      }
    })
  }


  cadastrar() {
    if (this.form.valid) {
      this.userService.addUser(this.form.value);
      alert('Usuário cadastrado com sucesso!');
      this.form.reset();
      this.router.navigate(['/Lista de usuarios']);
    }else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
