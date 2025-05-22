import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carro-login.component.html',
  styleUrl: './carro-login.component.css'
})
export class CarroLoginComponent {

  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  botaoDesabilitado: boolean = true;

  constructor(private router:Router){ }

  onBotaoClicado() {

    if(this.login.trim() !== '' && this.senha.trim() !== ''){
      
      if(this.login == 'loginadmin' && this.senha == 'admin'){
        alert(`Bem-vindo ${this.login} !`)
        this.router.navigate(['/pessoas'])
      }else{
        alert(`Dados Inválidos`)
      }
      
    }
    else{
      alert(`Preencha ambos os campos!`)
    }

  }

}
