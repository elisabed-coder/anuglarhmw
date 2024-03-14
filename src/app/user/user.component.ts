import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Output() choiceMade = new EventEmitter<boolean>();
  eventEmitted = false;
  constructor() {}

  ngOnInit(): void {}

  onChoiseMade(choice: boolean) {
    if (!this.eventEmitted) {
      this.choiceMade.emit(choice);
      this.eventEmitted = true;
    }
  }

  // homework2 task1 ngswitch
}
