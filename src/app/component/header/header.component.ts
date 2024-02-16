import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  option!: string;
  @Output () valueResponse: EventEmitter<string> = new EventEmitter();
  
  constructor() {
    this.optionSelect('Home')
  }

  optionSelect(value: string) {
    this.option = value;
    this.valueResponse.emit(value);
  }
}
