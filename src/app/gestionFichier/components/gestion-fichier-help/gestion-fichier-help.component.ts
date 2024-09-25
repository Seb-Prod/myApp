import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
import { TitreComponent } from '../titre/titre.component';
import { InfoProgrammeComponent } from '../../../shared/components/info-programme/info-programme.component';

@Component({
  selector: 'ecran-gestion-fichier-help',
  templateUrl: './gestion-fichier-help.component.html',
  styleUrls: ['./gestion-fichier-help.component.css'],
  standalone:true,
  imports:[IconButtonComponent, TitreComponent, InfoProgrammeComponent]
})
export class GestionFichierHelpComponent{
  @Input() progName:string = "";
  @Input() progCode:number = 0;
  @Output() clicked = new EventEmitter<string>();

  onClick(){
    this.clicked.emit("back");
  }
}
