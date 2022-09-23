import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface KnightForm {
	name: FormControl<string>;
	quest: FormControl<string>;
	favoriteColor?: FormControl<string>;
	sparrow?: FormControl<number | undefined>;
}

export interface PartyForm {
	count: FormControl<number | undefined>,
	ControlContainerInput2?: FormControl<string>,
	ControlValueAccessorInput2?: FormControl<string>,
	FormInput2?: FormControl<string>,
}

export interface OuterForm {
	outerInput: FormControl<string>,
	knights: FormArray<FormGroup<KnightForm>>,
	party: FormGroup<PartyForm>
}
