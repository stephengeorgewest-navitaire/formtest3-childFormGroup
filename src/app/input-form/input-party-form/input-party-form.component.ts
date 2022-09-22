import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'input-party-form[form]',
	templateUrl: './input-party-form.component.html',
})
export class InputPartyFormComponent implements OnInit  {
	@Input() public form : FormGroup;

	ngOnInit(): void {
		this.form.addControl("count", new FormControl("",[]));
		this.form.addControl("FormInput2", new FormControl("",[]));
	}
}
