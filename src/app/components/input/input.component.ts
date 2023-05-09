import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {


  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = "Salvar item";

  public valorItem!: string;


  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  public adicionarItem() {
    // console.log(this.valorItem);
    this.listaService.adicionarNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }

  editarItem() {
    this.listaService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = "Salvar item";
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes['itemQueVaiSerEditado'].currentValue);
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = "Editar item";
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }
}
