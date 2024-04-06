import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css',
})
export class RformComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{3,20}$/)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      alert("Регистрация успешна");
    }
  }
}
