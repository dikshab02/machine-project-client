import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpCallService } from '../services/http-call.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  constructor(public authService: AuthService,
              private router: Router,
              private httpCallService: HttpCallService){}


  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }

  handleProject(){
    this.router.navigateByUrl('/add-project')
  }

  handleMachine(){
    this.router.navigateByUrl('/add-machine')
  }
}
