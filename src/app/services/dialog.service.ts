import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessComponent } from '../components/dialog-success/dialog-success.component';

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
}
