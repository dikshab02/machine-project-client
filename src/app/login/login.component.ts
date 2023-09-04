import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCallService } from '../services/http-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpCallService: HttpCallService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.httpCallService.login(this.loginForm?.value).subscribe((response) => {
      localStorage.setItem('LOGIN_USER', JSON.stringify(response.data));
      this.isSubmitted = true;
      if (!this.loginForm?.valid) return;
      if (this.authService.isAdminCheck())
        this.router.navigate(['add-machine']);
      else this.router.navigate(['add-project']);
    });
  }
}
