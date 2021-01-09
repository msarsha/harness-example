import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filterValue: string;

  onFilter(value: string): void {
    this.filterValue = value;
  }
}
