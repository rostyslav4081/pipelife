import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fullName!: string;
  SPZ!: string;
  showBtn1 = {
    start: true,
    firstDiv: false,
    next: false
  };
  showBtn2 = {
    secondDiv: false,
    document: false,
    signature: false,
    last: false
  };
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
