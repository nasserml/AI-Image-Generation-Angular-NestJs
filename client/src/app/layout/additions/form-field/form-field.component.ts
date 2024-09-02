import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input() labelName!: string;
  @Input() type!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() formControlName!: string;
  @Input() change!: any;
  @Input() handleSurpriseMe!: any;
  @Input() isSurpriseMe!: boolean;
  control: FormControl = new FormControl('', Validators.required)

  formGroup!:FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.labelName)
    this.formGroup = new FormGroup({
      [this.formControlName]: new FormControl('')
    })
  }

}
