import { Component, OnInit ,Inject} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Import MAT_DIALOG_DATA

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<FormComponent>) { } // Inject MAT_DIALOG_DATA
  
  ngOnInit(): void {
    console.log(this.data)
  }

  email: any;
  closemanually(){
    this.ref.close(this.email)
  }
}
