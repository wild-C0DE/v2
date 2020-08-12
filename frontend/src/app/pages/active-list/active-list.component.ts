import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.scss']
})

export class ActiveListComponent implements OnInit {
  @Input() users: Array<String>;
  @Input() current: string;
  @Output() newConv = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onUserClick(username: string): boolean {
    this.newConv.emit(username);
    return false;
  }

}
