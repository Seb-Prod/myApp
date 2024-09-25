import { Component, EventEmitter, Input, model, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.css'],
  standalone: true,
  imports: []
})
export class SwitchButtonComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.test()
  }

  ngOnInit(): void {
    this.test();
  }


  @Input() label: string = "";
  @Input() color: string = "green";
  @Input() version:string = "option";
  value = model<number>(0);
  @Input() poids: number = 1;
  @Output() retour = new EventEmitter<number>()

  check = model<boolean>(false);

  test(){
    if (this.poids == this.value()) {
      this.check.set(true)
    } else {
      this.check.set(false);
    }
  }

  onClickCheckVersion(){
    if (this.check() == true) {
      this.check.set(false);
      this.value.set(0);
    } else {
      this.check.set(true);
      this.value.set(this.poids);
    }

    this.ngOnInit
    this.retour.emit(this.value());
  }

  onClick() {
    if (this.check() == true) {

    } else {
      this.check.set(true);
    }

    this.value.set(this.poids);
    this.ngOnInit
    this.retour.emit(this.value());
  }
}
