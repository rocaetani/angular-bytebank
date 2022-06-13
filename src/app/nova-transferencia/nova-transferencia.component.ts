import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponont {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 12;
  destino: number = 222;

  constructor(private transferenciaService: TransferenciaService, private router: Router){

  }

  transferir() {
    console.log('Solicitado nova transferencia.');
    const valorEmitir:Transferencia = {valor: this.valor, destino: this.destino };

    this.transferenciaService.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error))
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
