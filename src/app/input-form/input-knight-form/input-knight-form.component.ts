import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'input-knight-form[type][form]',
	templateUrl: './input-knight-form.component.html',
})
export class InputKnightFormComponent implements OnInit  {
	@Input() public type: "color" | "sparrow";
	@Input() public form : FormGroup;

	ngOnInit(): void {
		this.form.addControl("name", new FormControl("",[]));
		this.form.addControl("quest", new FormControl("",[]));
		if(this.type === "color")
			this.form.addControl("favoriteColor", new FormControl("",[]));
		else
			this.form.addControl("sparrow", new FormControl("",[]));
	}
}
