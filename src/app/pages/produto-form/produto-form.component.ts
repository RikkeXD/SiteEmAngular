import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/services/types/types';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {

  constructor(private service: ProdutoService) { }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
    quantidade: new FormControl('', [Validators.required, Validators.min(1)]),
  })


  onSubmit() {
    if (this.formulario.valid) {

      const novoProduto = {
        ...this.formulario.value, // Desestruturação para pegar os valores do formulário
        quantidade: Number(this.formulario.value?.quantidade)
      } as Produto;

      this.service.incluir(novoProduto).subscribe({
        next: () => {
          alert('Produto cadastrado com sucesso!');
          this.formulario.reset(); // Limpa o formulário após sucesso
        },
        error: (erro) => {
          console.error('Erro ao cadastrar produto:', erro);
          alert('Erro ao cadastrar produto. Verifique o console.');
        }
      });
    }
  }

}
