import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { KnightForm } from '../../form-types';

@Component({
	selector: 'control-container-knight-form[type]',
	templateUrl: './control-container-knight-form.component.html',
})
export class ControlContainerKnightFormComponent implements OnInit {
	@Input() public type: "color" | "sparrow";
	public form : FormGroup<KnightForm>;
	constructor(private controlContainer: ControlContainer) { }

	ngOnInit(): void {
		this.form = this.controlContainer.control as FormGroup<KnightForm>;
		this.form.addControl("name", new FormControl("",[]));
		this.form.addControl("quest", new FormControl("",[]));
		if(this.type === "color")
			this.form.addControl("favoriteColor", new FormControl("",[]));
		else
			this.form.addControl("sparrow", new FormControl(null,[]));
	}
}
