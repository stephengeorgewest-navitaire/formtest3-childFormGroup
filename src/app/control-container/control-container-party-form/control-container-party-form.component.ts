import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { PartyForm } from 'src/app/form-types';

@Component({
	selector: 'control-container-party-form',
	templateUrl: './control-container-party-form.component.html',
})
export class ControlContainerPartyFormComponent implements OnInit  {
	public form : FormGroup<PartyForm>;
	constructor(private controlContainer: ControlContainer) { }

	ngOnInit(): void {
		this.form = this.controlContainer.control as FormGroup<PartyForm>;
		this.form.addControl("count", new FormControl());
		this.form.addControl("ControlContainerInput2", new FormControl("",[]));
	}
}
