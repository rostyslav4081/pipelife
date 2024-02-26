import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    // public ref: DynamicDialogRef,
    // public config: DynamicDialogConfig,
    // private messageService: MessageService
  ) {

    this.loginForm = this.fb.group({
      id: undefined,
      name: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  login() {

  }
}
