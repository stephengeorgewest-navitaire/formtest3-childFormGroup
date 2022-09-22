import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'control-container-knight-form[type]',
	templateUrl: './control-container-knight-form.component.html',
})
export class ControlContainerKnightFormComponent implements OnInit {
	@Input() public type: "color" | "sparrow";
	public form : UntypedFormGroup;
	constructor(private controlContainer: ControlContainer) { }

	ngOnInit(): void {
		this.form = this.controlContainer.control as UntypedFormGroup;
		this.form.addControl("name", new UntypedFormControl("",[]));
		this.form.addControl("quest", new UntypedFormControl("",[]));
		if(this.type === "color")
			this.form.addControl("favoriteColor", new UntypedFormControl("",[]));
		else
			this.form.addControl("sparrow", new UntypedFormControl("",[]));
	}
}
