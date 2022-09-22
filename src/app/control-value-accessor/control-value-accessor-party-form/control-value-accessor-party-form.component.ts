import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, UntypedFormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'control-value-accessor-party-form',
	templateUrl: './control-value-accessor-party-form.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlValueAccessorPartyFormComponent),
		multi: true
	}]
})
export class ControlValueAccessorPartyFormComponent implements OnInit, ControlValueAccessor  {
	public form: UntypedFormGroup = new UntypedFormGroup({});

	ngOnInit(): void {
		this.form.addControl("count", new UntypedFormControl("",[]));
		this.form.addControl("ControlValueAccessorInput2", new UntypedFormControl("",[]));
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
