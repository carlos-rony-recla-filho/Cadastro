import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service.service';
import { IdadePipe } from '../../components/tb-usuarios/idade.pipe';

@Component({
  selector: 'app-tb-usuarios',
  standalone: false,
  templateUrl: './tb-usuarios.component.html',
  styleUrl: './tb-usuarios.component.css'
})
export class TbUsuariosComponent {

  users: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
