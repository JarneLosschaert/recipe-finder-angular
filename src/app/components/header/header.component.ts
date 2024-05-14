import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selected: string = 'home';

  constructor() {}

  ngOnInit() {
    this.selected = window.location.pathname.substring(1);
  }

  selectTab(tab: string): void {
    this.selected = tab;
  }

  isSelected(tab: string): boolean {
    return this.selected === tab;
  }
}
