import { Component, Input, model, OnInit } from '@angular/core';
import { InputNumberComponent } from '../input-number/input-number.component';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'app-info-programme',
  templateUrl: './info-programme.component.html',
  styleUrls: ['./info-programme.component.css'],
  standalone: true,
  imports: [InputNumberComponent, InputTextComponent]
})
export class InfoProgrammeComponent {
  name = model<string>("");
  codage = model<number>(0);
  @Input() enabled: boolean = false;
}
