import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/service/computer-service.service';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  computerForm = new FormGroup({
    computerName: new FormControl(''),
    description: new FormControl(''),
    userName: new FormControl(''),
    userSurname: new FormControl(''),
    winVer: new FormControl(''),
    lastUpdate: new FormControl(''),
    domainMigrated: new FormControl('')
  });

  constructor(private service: ComputerService, public dialogRef: MatDialogRef<EditComponent>) {}

  ngOnInit() {

  }

}
