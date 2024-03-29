import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../../services/dialog.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private dialogService: DialogService) { }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.httpClient.post('https://scripts.lukas-volgger.dev/send_mail.php', formData)
        .subscribe({
          next: (response) => {
            // console.log('Response from server:', response);
            this.dialogService.openSuccessDialog();
          },
          error: (error) => {
            // console.error('Error:', error);
            this.dialogService.openErrorDialog();
          }
        });
    } else {
      // console.log('Form is invalid');
    }
  }

  /**
   * Retrieves the message for the user and displays it at the frontend
   * @param controlName The name of the form control for which to retrieve the error message
   * @returns a string representing the error message or an empty string if no error is present
   */
  getErrorMessage(controlName: string) {
    const control = this.contactForm.get(controlName);

    if (control?.hasError('required')) {
      return 'This field is required.';
    }

    if (control?.hasError('minlength')) {
      return 'You must enter at least 3 characters.';
    }

    return control?.hasError('email') ? 'Not a valid email address.' : '';
  }
}
