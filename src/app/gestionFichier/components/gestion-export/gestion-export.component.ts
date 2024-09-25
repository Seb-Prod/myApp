import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitreComponent } from '../titre/titre.component';
import { InfoProgrammeComponent } from '../../../shared/components/info-programme/info-programme.component';

@Component({
  selector: 'ecran-gestion-export',
  templateUrl: './gestion-export.component.html',
  styleUrls: ['./gestion-export.component.css'],
  standalone:true,
  imports:[TitreComponent, InfoProgrammeComponent]
})
export class GestionExportComponent {
  @Input() progName:string = "";
  @Input() progCode:number = 0;
  @Output() commandeClicked = new EventEmitter<string>()

  onClick(myAction:string){
    if(myAction == "etapes"){
      this.commandeClicked.emit("gestionFichier");
    }else{
      this.commandeClicked.emit(myAction);
    }
  }
}
