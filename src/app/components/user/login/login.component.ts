import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup | any;
  hide: boolean = true;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get password() { return this.form.get('password'); }
  get username() { return this.form.get('username'); }


  onSubmit() {
    if (this.form.invalid) return;

    if (this.form.valid) {
      this.userService.loginUser(this.form.value).subscribe((res) => console.log(res));
      console.log(this.form.value)
      this.router.navigate(['/dashboard'])
    }
  }
}
