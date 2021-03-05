import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import type { TextInput } from './model/text-input';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() textInput: TextInput = {
    placeholder: '',
    type: '',
    label: '',
    formControlName: '',
  };
}
