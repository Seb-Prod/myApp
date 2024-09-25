import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css'],
  standalone:true,
  imports:[IconButtonComponent]

})
export class TitreComponent  {
  @Input() titre = <string>("");
  @Output() clicked = new EventEmitter<string>();
  
  onClick(myAction:string){
    this.clicked.emit(myAction);
  }

}
