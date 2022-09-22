import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'control-value-accessor-form',
	templateUrl: './control-value-accessor-form.component.html'
})
export class ControlValueAccessorFormComponent implements OnInit {
	public form: FormGroup | undefined;
	constructor(private builder: FormBuilder){
	}
	public ngOnInit(){
		this.form = this.builder.group( {
			"knights": this.builder.array([
				new FormControl(),
				new FormControl(),
				new FormControl()
			]),
		});

		this.form.addControl("party", new FormControl());
		this.form.addControl("outerInput", this.builder.control("",[Validators.required]));
	}
	public setValue(){
		this.form.setValue({
			"outerInput":"test",
			party: {
				count: 5,
				ControlValueAccessorInput2: "cats"
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
				ControlValueAccessorInput2: null
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
