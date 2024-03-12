import { Component } from '@angular/core';

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
}
