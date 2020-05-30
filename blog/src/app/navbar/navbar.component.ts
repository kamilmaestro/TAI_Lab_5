import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
    return this.authService.logout().subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

}
