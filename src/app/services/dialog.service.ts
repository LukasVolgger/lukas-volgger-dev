import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessComponent } from '../components/dialog-success/dialog-success.component';
import { DialogErrorComponent } from '../components/dialog-error/dialog-error.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }

  openSuccessDialog(): void {
    this.dialog.open(DialogSuccessComponent, {
      // Optional config
    });
  }

  openErrorDialog(): void {
    this.dialog.open(DialogErrorComponent, {
      // Optional config
    });
  }
}
