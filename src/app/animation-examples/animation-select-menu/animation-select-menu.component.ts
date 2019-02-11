import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'animation-select-menu',
  templateUrl: './animation-select-menu.component.html',
  styleUrls: ['./animation-select-menu.component.scss']
})
export class AnimationSelectMenuComponent implements OnInit {
  @Output() public animationSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
   onSelect(event: Event, name: string) {
    event.stopPropagation();
    this.animationSelect.next(name);
   }
}
