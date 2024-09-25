import { Component, computed, EventEmitter, model, OnInit, Output } from '@angular/core';
import { InputTextComponent } from '../../../shared/components/input-text/input-text.component';
import { Action, Etape } from '../../../shared/models/programme.model';

@Component({
  selector: 'app-etape-actions',
  templateUrl: './etape-actions.component.html',
  styleUrls: ['./etape-actions.component.css'],
  standalone:true,
  imports:[InputTextComponent]
})
export class EtapeActionsComponent {
  @Output() btActionClicked = new EventEmitter<number>()
  
  etape= model<Etape>(new Etape());

  message = model<string>("");


  action1 = computed(()=>{
    return new Action(this.etape().actions[0].action);
  })
  action2 = computed(()=>{
    return new Action(this.etape().actions[1].action);
  })
  action3 = computed(()=>{
    return new Action(this.etape().actions[2].action);
  })
  action4 = computed(()=>{
    return new Action(this.etape().actions[3].action);
  })
  action5 = computed(()=>{
    return new Action(this.etape().actions[4].action);
  })


  onClickAction(event:number){
    let retour:number = event;
    this.btActionClicked.emit(retour);
  }
  

}
