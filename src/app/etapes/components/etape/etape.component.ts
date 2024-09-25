import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { InfoProgrammeComponent } from '../../../shared/components/info-programme/info-programme.component';
import { EtapeNavigationComponent } from '../etape-navigation/etape-navigation.component';
import { EtapeActionsComponent } from '../etape-actions/etape-actions.component';
import { Etape } from '../../../shared/models/programme.model';


@Component({
  selector: 'ecran-etape',
  standalone: true,
  templateUrl: './etape.component.html',
  styleUrls: ['./etape.component.css'],
  imports:[ButtonsComponent, InfoProgrammeComponent, EtapeNavigationComponent, EtapeActionsComponent]
})
export class EtapeComponent {
  stepIndex = model<number>(1);
  etape = model<Etape>(new Etape());


  @Input() progName:string = "";
  @Input() progCode:number = 0;
  @Output() commandeClicked = new EventEmitter<string>();
  @Output() actionClicked = new EventEmitter<number>()

  
  onclickButtonCommande(myCommande:string){
    this.commandeClicked.emit(myCommande);
  }

  onClickButtonAction(indexAction:number){
    this.actionClicked.emit(indexAction);
  }
}
