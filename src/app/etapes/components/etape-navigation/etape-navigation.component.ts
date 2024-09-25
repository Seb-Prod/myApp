import { Component, EventEmitter, model, Output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';

@Component({
  selector: 'app-etape-navigation',
  templateUrl: './etape-navigation.component.html',
  styleUrls: ['./etape-navigation.component.css'],
  standalone:true,
  imports:[IconButtonComponent]
})
export class EtapeNavigationComponent {
  stepIndex = model<number>(1);
  @Output() btClicked = new EventEmitter<string>();

  onEtapeChange(index: number) {
    this.stepIndex.set(this.stepIndex() + index)
  }

  onclickButton(event: string) {
    this.btClicked.emit(event);
  }

  onclickButtonInitial(){
    this.btClicked.emit("initial");
  }

}
