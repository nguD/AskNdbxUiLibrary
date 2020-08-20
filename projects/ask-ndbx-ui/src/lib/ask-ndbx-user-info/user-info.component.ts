import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ask-ndbx-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: any = {};
  constructor() { }

  ngOnInit() {
  }

}
