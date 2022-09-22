import { Component, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'control-container-party-form',
	templateUrl: './control-container-party-form.component.html',
})
export class ControlContainerPartyFormComponent implements OnInit  {
	public form : UntypedFormGroup;
	constructor(private controlContainer: ControlContainer) { }

	ngOnInit(): void {
		this.form = this.controlContainer.control as UntypedFormGroup;
		this.form.addControl("count", new UntypedFormControl("",[]));
		this.form.addControl("ControlContainerInput2", new UntypedFormControl("",[]));
	}
}
