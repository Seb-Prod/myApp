import { Component, EventEmitter, Output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  standalone: true,
  imports: [IconButtonComponent]
})

export class ButtonsComponent {
  @Output() buttonClicked = new EventEmitter<string>();
  
  onClickButton(myAction: string) {
    this.buttonClicked.emit(myAction);
  }
}
