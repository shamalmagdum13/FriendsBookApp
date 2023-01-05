import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { newRegister } from 'src/app/models/register.model';
import { UserService } from 'src/app/services/user.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DatePipe]
})
export class RegistrationComponent implements OnInit {

  form: FormGroup | any;
  hide: boolean = true;
  today = new Date();

  constructor(
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,
      Validators.pattern("^([a-zA-Z0-9.-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      dob: [null, [Validators.required]]
    });
  }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get dob() { return this.form.get('dob'); };

  onSubmit() {

    if (this.form.invalid) return;

    if (this.form.valid) {
      const body = this.form.value;
      body.dob = this.datePipe.transform(body.dob, 'MM/d/YYYY');
      this.userService.postNewUserData(this.form.value).subscribe((res: newRegister) => res);
      this.router.navigate(['/login'])
    }
  }

}
