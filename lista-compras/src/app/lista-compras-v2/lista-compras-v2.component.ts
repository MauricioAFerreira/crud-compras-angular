import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-compras-v2',
  imports: [],
  templateUrl: './lista-compras-v2.component.html',
  styleUrl: './lista-compras-v2.component.css'
})
export class ListaComprasV2Component {

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
