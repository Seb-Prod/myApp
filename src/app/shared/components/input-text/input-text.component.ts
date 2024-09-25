import { Component, Input, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  standalone: true,
  imports: [FormsModule]
})

export class InputTextComponent {
  @Input() nb: number = 20;
  @Input() enabled: boolean = false;
  @Input() placeHolder:string = "";
  value =model<string>();
}
