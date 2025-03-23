import { Component } from '@angular/core';
import { FormControl,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descricao: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(200)])
  })


  onSubmit() {
    if (this.formulario.valid) {
      alert('Formulário enviado com sucesso!\n' + JSON.stringify(this.formulario.value));
    }
  }

}
