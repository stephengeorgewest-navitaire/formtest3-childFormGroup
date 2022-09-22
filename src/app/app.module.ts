import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from "@angular/material/select";

import { ControlContainerFormComponent } from './control-container/control-container-form.component';
import { ControlContainerKnightFormComponent } from './control-container/control-container-knight-form/control-container-knight-form.component';
import { ControlContainerPartyFormComponent } from './control-container/control-container-party-form/control-container-party-form.component';

import { ControlValueAccessorFormComponent } from './control-value-accessor/control-value-accessor-form.component';
import { ControlValueAccessorKnightFormComponent } from './control-value-accessor/control-value-accessor-knight-form/control-value-accessor-knight-form.component';
import { ControlValueAccessorPartyFormComponent } from './control-value-accessor/control-value-accessor-party-form/control-value-accessor-party-form.component';

import { InputFormComponent } from './input-form/input-form.component';
import { InputKnightFormComponent } from './input-form/input-knight-form/input-knight-form.component';
import { InputPartyFormComponent } from './input-form/input-party-form/input-party-form.component';

@NgModule({
	declarations: [
		AppComponent,

		ControlContainerFormComponent,
		ControlContainerPartyFormComponent,
		ControlContainerKnightFormComponent,

		ControlValueAccessorFormComponent,
		ControlValueAccessorPartyFormComponent,
		ControlValueAccessorKnightFormComponent,

		InputFormComponent,
		InputPartyFormComponent,
		InputKnightFormComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule, ReactiveFormsModule,
		MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
