import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComprasV2Component } from './lista-compras-v2/lista-compras-v2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule, MatIconModule, ListaComprasV2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-compras';
  
  itens: string[] = []; 

  novoItem = '';

  adicionar() {
    if (this.novoItem.trim()) {
      this.itens.push(this.novoItem); 
      this.novoItem = '';
    }
  }

  excluir(index: number) {
    this.itens.splice(index, 1);
  }

  editar(index: number) {
    this.novoItem = this.itens[index];
    this.excluir(index);
  }
}
