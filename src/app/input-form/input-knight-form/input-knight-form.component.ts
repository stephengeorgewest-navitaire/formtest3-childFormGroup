import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'input-knight-form[type][form]',
	templateUrl: './input-knight-form.component.html',
})
export class InputKnightFormComponent implements OnInit  {
	@Input() public type: "color" | "sparrow";
	@Input() public form : UntypedFormGroup;

	ngOnInit(): void {
		this.form.addControl("name", new UntypedFormControl("",[]));
		this.form.addControl("quest", new UntypedFormControl("",[]));
		if(this.type === "color")
			this.form.addControl("favoriteColor", new UntypedFormControl("",[]));
		else
			this.form.addControl("sparrow", new UntypedFormControl("",[]));
	}
}
