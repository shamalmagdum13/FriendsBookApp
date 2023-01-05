import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup | any;

  today = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern("^([a-zA-Z0-9.-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$")]],
      dob: [null, [Validators.required]],
      // dob: [new Date(), [Validators.required]],
    })
  }

  get email() { return this.form.get('email'); };
  get dob() { return this.form.get('dob'); };

  onSubmit() {
    if (this.form.invalid) return;

    if (this.form.valid) {
      this.router.navigate(['/reset-password'])
      console.log(this.form.value)
    }
  }
}
