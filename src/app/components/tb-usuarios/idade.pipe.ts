import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade',
  standalone: false
})
// export class IdadePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
export class IdadePipe implements PipeTransform {
  transform(dataNascimento: string): number {
    if (!dataNascimento) return 0;

    const nascimento = new Date(dataNascimento);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    // Ajusta a idade se o aniversário ainda não aconteceu este ano
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }
}
