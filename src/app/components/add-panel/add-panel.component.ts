import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.scss']
})
export class AddPanelComponent implements OnInit {

  fg: FormGroup

  constructor(private dialogRef: MatDialogRef<AddPanelComponent>) { }

  ngOnInit() {
    this.fg = new FormGroup({
      "title": new FormControl("", Validators.required),
      "about": new FormControl("", Validators.required)
    })
  }

  confirmForm(){
    this.dialogRef.close({title: this.fg.controls['title'].value, about: this.fg.controls['about'].value, success: true})
  }

  close(){
    this.dialogRef.close({title: this.fg.controls['title'].value, about: this.fg.controls['about'].value, success: false})
  }

}
