import { Component, OnInit, Inject } from '@angular/core';
import { ComputerService } from 'src/app/service/computer-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Computer } from 'src/app/model/computer';

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
  computer: Computer;

  constructor(private service: ComputerService, public dialogRef: MatDialogRef<EditComponent>,
              private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: any) {
                if (data.act === 'EDIT') {
                  console.log('data.dataKey: ' + data.dataKey.computerName);
                  this.computer = data.dataKey;
                  // this.computer.computerName = data.dataKey.computerName;
                  // this.computer.description = data.dataKeydescription;
                  // this.computer.domainMigration = data.domainMigration;
                  // this.computer.lastUpdate = data.lastUpdate;
                  // this.computer.userName = data.userName;
                  // this.computer.userSurname = data.userSurname;
                  // this.computer.winVersion = data.winVersion;
                }
    }

  ngOnInit() {
    if (this.data.act === 'EDIT') {
        console.log('Computer DataKey Id: ' + this.data.dataKey.id);
        console.log('Computer id: ' + this.computer.id);
        this.computerForm = this.fb.group({
        id: [this.data.dataKey.id, []],
        computerName: [this.data.dataKey.computerName, []],
        description: [this.data.dataKey.description, []],
        userName: [this.data.dataKey.userName, []],
        userSurname: [this.data.dataKey.userSurname, []],
        winVer: [this.data.dataKey.winVersion, []],
        lastUpdate: [this.data.dataKey.lastUpdate, []],
        domainMigrated: [this.data.dataKey.domainMigration, []]
      });
    }
  }

}
