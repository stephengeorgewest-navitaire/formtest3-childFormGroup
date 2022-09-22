import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'input-form',
	templateUrl: './input-form.component.html'
})
export class InputFormComponent implements OnInit {
	public form: UntypedFormGroup | undefined;
	constructor(private builder: UntypedFormBuilder){
	}
	public ngOnInit(){
		this.form = this.builder.group( {
			"knights": this.builder.array([this.builder.group({}),this.builder.group({}),this.builder.group({})]),
			"party": this.builder.group({})
		});

		this.form.addControl("outerInput", this.builder.control("",[Validators.required]));
	}
	public setValue(){
		this.form.setValue({
			"outerInput":"test",
			party: {
				count: 5,
				FormInput2: "cats"
			},
			knights: [{
				name: "Aurthor",
				quest: "Holly Grail",
				favoriteColor: "#aaaaaa"
			},{
				name: "Lancelot",
				quest: "Holly Grail",
				favoriteColor: "#4500ff"
			},{
				name: "Gallihad",
				quest: "Holly Grail",
				sparrow: "15"
			}]
		});
	}
	public removeValue(){
		this.form.setValue({
			"outerInput": null,
			party: {
				count: null,
				FormInput2: null
			},
			knights: [{
				name: null,
				quest: null,
				favoriteColor: null
			},{
				name: null,
				quest: null,
				favoriteColor: null
			},{
				name: null,
				quest: null,
				sparrow: null
			}]
		});
	}
	public submit(){
		if(this.form.valid){
			return true;
		}
		return false;
	}
}
