import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';
import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController, private authData: AuthData) {
      this.nav = nav;
  }

  logOut(){
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }

  goToProfile(){
    this.nav.push(ProfilePage);
  }

  goToCreate(){
    this.nav.push(EventCreatePage);
  }

  goToList(){
    this.nav.push(EventListPage);
  }
}
