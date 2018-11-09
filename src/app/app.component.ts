import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  inputs = [
    {
      label: 'Email',
      type: 'email',
      control: 'email',
      validator: {},
      errors: [{
        type: 'required',
        msg: 'Your email is required'
      },
      {
        type: 'pattern',
        msg: 'Your email is not valid'
      }
      ]

    },
    {
      label: 'Full Name',
      type: 'text',
      control: 'fullName',
      validator: {},
      errors: [{
        type: 'required',
        msg: 'Your email is required'
      },
      {
        type: 'pattern',
        msg: 'Your email is not valid'
      }
      ]
    },
  ];
  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.registerForm.controls; }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['Hello', [Validators.required, Validators.pattern(/[a-z]+\s[a-z]+/i)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/.+@bloomandwild.(fr|com|de)$/)]]
    });
    this.inputs[0].validator = this.registerForm.controls.email;
    console.log(this.registerForm);
  }

  submit() {
    console.log(this.registerForm);

    this.submitted = this.registerForm.valid;
  }

}
