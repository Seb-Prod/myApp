import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconButtonComponent } from '../../../shared/components/icon-button/icon-button.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  standalone: true,
  imports: [IconButtonComponent]
})
export class ButtonsComponent {
  @Output() clicked = new EventEmitter<string>();

  onClick(myAction:string) {
    this.clicked.emit(myAction);
  }

}
