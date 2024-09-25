import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'icon-button',
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  @Input() image: string = "missing";
  @Input() actionName: string = "missing";
  @Input() size: string = "small";
  @Input() label: string = "";
  @Output() clicked = new EventEmitter<string>();
  @Input() infoPosition: string = "infoHaut";

  onClick() {
    this.clicked.emit(this.actionName);
  }
}
