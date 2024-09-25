import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
import { combineLatest } from 'rxjs';
import { TitreComponent } from '../titre/titre.component';
import { InfoProgrammeComponent } from '../../../shared/components/info-programme/info-programme.component';

@Component({
  selector: 'ecran-gestion-fichier',
  templateUrl: './gestion-fichier.component.html',
  styleUrls: ['./gestion-fichier.component.css'],
  standalone: true,
  imports: [IconButtonComponent, TitreComponent, InfoProgrammeComponent]
})
export class GestionFichierComponent {
  @Input() progName:string = "";
  @Input() progCode:number = 0;
  @Output() commandeClicked = new EventEmitter<string>()

  onClick(myAction:string){
    this.commandeClicked.emit(myAction);
  }
}
