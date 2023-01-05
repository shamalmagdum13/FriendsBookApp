import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Validation from '../../../validators/validation';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup | any;
  hide: boolean = true;
  today = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, {
      validators: [Validation.match('password', 'confirmPassword')]
    })
  }

  get password() { return this.form.get('password') };
  get confirmPassword() { return this.form.get('confirmPassword') };

  onSubmit() {
    if (this.form.invalid) return;

    if (this.form.valid) {
      this.router.navigate(['/login'])
      console.log(this.form.value)
    }
  }

}
