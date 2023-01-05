import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendsBook';

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
    console.log(this.isLoggedIn$);
  }

  onLogout() {
    this.userService.logout();
  }
}
