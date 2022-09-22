import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, ControlValueAccessor, UntypedFormControl, UntypedFormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

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
	public form: UntypedFormGroup = new UntypedFormGroup({});

	ngOnInit(): void {
		this.form.addControl("name", new UntypedFormControl("",[]));
		this.form.addControl("quest", new UntypedFormControl("",[]));
		if(this.type === "color")
			this.form.addControl("favoriteColor", new UntypedFormControl("",[]));
		else
			this.form.addControl("sparrow", new UntypedFormControl("",[]));
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
