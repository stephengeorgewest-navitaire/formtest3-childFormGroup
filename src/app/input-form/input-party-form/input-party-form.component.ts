import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PartyForm } from 'src/app/form-types';

interface InputPartyForm extends PartyForm {
	FormInput2: FormControl<string>,
}

@Component({
	selector: 'input-party-form[form]',
	templateUrl: './input-party-form.component.html',
})
export class InputPartyFormComponent implements OnInit  {
	@Input() public form: FormGroup<InputPartyForm>;

	ngOnInit(): void {
		this.form.addControl("count", new FormControl(undefined,[]));
		this.form.addControl("FormInput2", new FormControl("",[]));
	}
}
