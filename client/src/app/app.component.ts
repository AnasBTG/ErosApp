import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'The Eros App';

  users: any;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUse();
  }

  setCurrentUse() {
    const user : User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}