import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Breadcrumb } from '../internal/breadcrumbs/model/breadcrumb';
import { Button } from '../internal/button/model/button';
import { TextInput } from '../internal/text-input/model/text-input';
import { Region } from '../model/region';
import { ResponseData } from '../model/response-data';
import { RegionalService } from '../service/regional.service';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.scss'],
})
export class RegionalComponent {
  private readonly _breadcrumbs: Breadcrumb[] = [
    {
      title: 'Home',
      routerLink: '/',
    },
    {
      title: 'Regional',
      routerLink: '/regional',
      isActive: true,
    },
  ];
  private readonly _postcodeInput: TextInput = {
    type: 'text',
    placeholder: 'Enter a postcode',
    label: 'Postcode',
    formControlName: 'postcode',
  };
  private readonly _submitButton: Button = {
    type: 'submit',
    value: 'Submit',
  };
  private readonly _cancelButton: Button = {
    type: 'reset',
    value: 'Cancel',
  };
  postcodeForm: FormGroup;

  constructor(
    private _regionalService: RegionalService,
    private _formBuilder: FormBuilder
  ) {
    this.postcodeForm = this._formBuilder.group({
      postcode: ['', Validators.required],
    });
  }

  get breadcrumbs(): Breadcrumb[] {
    return this._breadcrumbs;
  }

  get postcodeInput(): TextInput {
    return this._postcodeInput;
  }

  get submitButton(): Button {
    return this._submitButton;
  }

  get cancelButton(): Button {
    return this._cancelButton;
  }

  onPostcodeSubmit(): void {
    this._regionalService
      .getRegionByPostcode(this.postcodeForm.value.postcode)
      .subscribe(
        (response: ResponseData<Region>): void => {
          console.log(response.data[0].data[0].intensity);
        },
        (error: HttpErrorResponse): void => {
          console.log(error);
        }
      );
  }
}
