import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  postForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    // public ref: DynamicDialogRef,
    // public config: DynamicDialogConfig,
    // private messageService: MessageService
  ) {

    this.postForm = this.fb.group({
      id: undefined,
      fullNameForm: ['', Validators.required],
      SPZForm: ['', Validators.required],
    });

  }

  postData() {

  }
}
