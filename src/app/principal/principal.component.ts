import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.principalService.inicializar();
  }

  get jogador(): number {
    return this.principalService.jogador;
  }

  get showFinal(): boolean {
    return this.principalService.showFinal;
  }

  iniciarJogo(): void {
    this.principalService.iniciarJogo();
  }

  get showTabuleiro(): boolean {
    return this.principalService.showTabuleiro;
  }

  get showInicio(): boolean {
    return this.principalService.showInicio;
  }

  jogar(posX: number, posY: number): void {
  	this.principalService.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
  	return this.principalService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
  	return this.principalService.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
  	return this.principalService.exibirVitoria(posX, posY);
  }

  novoJogo(): void {
  	this.principalService.novoJogo();
  }
}
