import { Component, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { // trazendo as informações
    console.log("OnInit")
  }

  ngOnChanges() { // detecha mudancas nas properties
    console.log("OnChanges")
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem(): void {
    console.log("ESTÃO TENTANDO ME CALAR")
    this.emitindoIdParaDeletar.emit(this.item.id)
  }

  ngOnDestroy() {
    console.log("Conseguiram me calar");
  }

}
