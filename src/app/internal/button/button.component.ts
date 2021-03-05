import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import type { Button } from './model/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() button: Button = { type: '', value: '' };
}
