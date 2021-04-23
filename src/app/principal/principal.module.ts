import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { PrincipalService } from './principal.service';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrincipalComponent
  ],
  providers: [
    PrincipalService
  ]
})
export class PrincipalModule { }
