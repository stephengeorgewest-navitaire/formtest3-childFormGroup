import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public form: FormGroup | undefined;
	constructor(private builder: FormBuilder){
	}
	public ngOnInit(){
		this.form = this.builder.group( {
			/*"outerInput": ["", Validators.required],*/
			"knights": this.builder.array([this.builder.group({}),this.builder.group({}),this.builder.group({})]),
			"group": this.builder.group({"count": 3, "input2": []}, {})
		});

		this.form.addControl("outerInput", this.builder.control("",[Validators.required]));
	}
	public setValue(){
		this.form.controls["outerInput"].setValue("test");
	}
	public removeValue(){
		this.form.controls["outerInput"].setValue("");
	}
	public isvalid(){
		const v = this.form.controls["outerInput"].valid;
		return v;
	}
	public isinvalid(){
		const nv = !this.form.controls["outerInput"].valid;
		return nv;
	}
	public submit(){
		if(this.form.valid){
			return true;
		}
		return false;
	}
	public markTouched(){
		this.form.markAllAsTouched();
	}
}
