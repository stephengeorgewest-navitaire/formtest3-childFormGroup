import { FormArray, FormControl, FormGroup, UntypedFormControl } from "@angular/forms";

export interface KnightForm {
	name: FormControl<string>;
	quest: FormControl<string>;
	/* one of:
	favoriteColor?: FormControl<string>;
	sparrow?: FormControl<number | undefined>;
	or any other control
	*/
	[key: string | number | symbol]: UntypedFormControl;
}

export interface PartyForm {
	count: FormControl<number | undefined>,
	[key: string | number | symbol]: UntypedFormControl;
}

export interface OuterForm {
	outerInput: FormControl<string>,
	knights: FormArray<FormGroup<KnightForm>>,
	party: FormGroup<PartyForm>
}
