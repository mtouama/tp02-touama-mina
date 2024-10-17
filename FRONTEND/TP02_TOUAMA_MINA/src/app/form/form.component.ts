import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/select';
import { MatError } from '@angular/material/form-field';
import { SummaryComponent } from "../summary/summary.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatInput, MatSelect, MatButton, MatCard, MatFormField, MatLabel, MatOption, MatError, SummaryComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  tp02Form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    postalCode : new FormControl('', Validators.required),
    country : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    login : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)
  });

  genderOptions : string[] = ["Homme", "Femme", "Autre", "Non spécifié"];
  isSubmit = false;


  onSubmit() {
    if (this.tp02Form.invalid) {
      console.log("Invalid form !!");
    }
    console.log(this.tp02Form.value);
    this.isSubmit = true;
    this.tp02Form.disable();
  }

  checkPassword(){
    const psswd = this.tp02Form.get('password')?.value;
    const confirmPsswd = this.tp02Form.get('confirmPassword')?.value;
    return psswd === confirmPsswd;
  }

}
