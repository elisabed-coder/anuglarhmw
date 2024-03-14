import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'commschooltwo';
  agreeCount = 0;
  disagreeCount = 0;

  onChoiseMade(choice: boolean) {
    if (choice) {
      this.agreeCount++;
    } else {
      this.disagreeCount++;
    }
  }

  // // homework2 task1 ngswitch

  feature: string = '';

  // - 2. highlight-directive-v2-anim
  selectedColor: string = '';

  // 3.. highlight-directive-final-anim

  hoverColor: string = '';
  isActive = false;
  active = true;
  changeIsActive() {
    this.isActive = !this.isActive;
    this.active = !this.active;
  }

  // 3.. highlight-directive-final-anim
  color = '';
  changeText = false;
  txtcolor: string = '';

  // 4..unless diresctive

  condition = false;
}
