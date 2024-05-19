import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

//constants & interfaces are imported
import { registerValidations } from 'src/app/shared/constants';
import { IUserRegistration } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { } // FormBuilder & Router is Injected

  ngOnInit(): void {
    this.initForm(); // formGroup is initialized when component is initialized
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(registerValidations.password.minLength),
      Validators.pattern(registerValidations.password.uppercaseRegex),
      Validators.pattern(registerValidations.password.numberRegex),
      Validators.pattern(registerValidations.password.specialCharRegex)],],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]]
    });
  }

  onSubmit() {
    const user: IUserRegistration = this.formGroup.value;
    if (user) {
      console.log('Form Submitted!', this.formGroup.value);
      this.formGroup.reset() // form is reset when form is submitted
    }
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!this.formGroup) {
      return null; // Form group not initialized yet
    }
    const passwordControl = this.formGroup.get('password');
    if (passwordControl && control.value !== passwordControl.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
