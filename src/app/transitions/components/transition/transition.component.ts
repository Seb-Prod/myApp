import { InputNumberComponent } from './../../../shared/components/input-number/input-number.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';
import { TransitionEntreeComponent } from '../transition-entree/transition-entree.component';
import { Entree, Transition } from '../../../shared/models/programme.model';
import { TransitionModel } from '../../../actions/models/transitions.model';



@Component({
  selector: 'ecran-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
  standalone: true,
  imports: [IconButtonComponent, InputNumberComponent, TransitionEntreeComponent]
})
export class TransitionComponent implements OnInit{
  ngOnInit(): void {
    this.param = new TransitionModel(this.transtion.transition);
    //console.log(this.param.btE2_1);
  }
  /** Index de l'étape en cours */
  @Input() stepIndex: number = 0;
  
  @Input() transtion:Transition = new Transition();
  @Input() labelEntree:Entree[] = [];
  @Output() retourClicked = new EventEmitter<string>();

  param:TransitionModel = new TransitionModel();
  page: number = 1;

  onClickPage(step: number) {
    this.page = this.page + step
    console.log(this.page);
    if(this.page == 0){
      this.page = 1;
      this.retourClicked.emit("saveTansition");
    }
  }
}
