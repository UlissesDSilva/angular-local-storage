import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-items',
  templateUrl: './input-add-items.component.html',
  styleUrls: ['./input-add-items.component.scss']
})
export class InputAddItemsComponent {
  public name: string = "";
  @Output() sendName = new EventEmitter<string>();

  send(): void {
    this.name = this.name.trim();
    if (this.name) {
      this.sendName.emit(this.name);
      this.name = "";
    }
  }
}
