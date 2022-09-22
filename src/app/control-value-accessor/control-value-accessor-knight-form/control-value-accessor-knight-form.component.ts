import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'control-value-accessor-knight-form[type]',
	templateUrl: './control-value-accessor-knight-form.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlValueAccessorKnightFormComponent),
		multi: true
	}]
})
export class ControlValueAccessorKnightFormComponent implements OnInit, ControlValueAccessor {
	@Input() public type: "color" | "sparrow";
	public form: FormGroup = new FormGroup({});

	ngOnInit(): void {
		this.form.addControl("name", new FormControl("",[]));
		this.form.addControl("quest", new FormControl("",[]));
		if(this.type === "color")
			this.form.addControl("favoriteColor", new FormControl("",[]));
		else
			this.form.addControl("sparrow", new FormControl("",[]));
	}
	writeValue(obj: any): void {
		obj && this.form.setValue(obj, {emitEvent: false});
	}
	registerOnChange(fn: any): void {
		this.form.valueChanges.subscribe(fn);
	}
	public onTouched: () => void = () => {};
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
	setDisabledState?(isDisabled: boolean): void {
		isDisabled ? this.form.disable(): this.form.enable();
	}
}
