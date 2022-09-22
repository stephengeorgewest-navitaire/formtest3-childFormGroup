import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'input-party-form[form]',
	templateUrl: './input-party-form.component.html',
})
export class InputPartyFormComponent implements OnInit  {
	@Input() public form : UntypedFormGroup;

	ngOnInit(): void {
		this.form.addControl("count", new UntypedFormControl("",[]));
		this.form.addControl("FormInput2", new UntypedFormControl("",[]));
	}
}
