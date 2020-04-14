import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/model/computer';
import { ComputerService } from 'src/app/service/computer-service.service';
import { MatDialog } from '@angular/material';
import { EditComponent } from 'src/app/edit/edit/edit.component';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  computers: Computer[];

  constructor(private service: ComputerService, public dialog: MatDialog ) { }

  openEdit(action: string, computer?: Computer) {
    const dialogRef = this.dialog.open(EditComponent, {
      height: '500px',
      width: '500px',
      disableClose: true,
      data: {dataKey: computer, act: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.submitted) {

        if (action === 'EDIT') {
          console.log('DataKey: ' + result.dataKey.id);
          // console.log('Computer edit id:  ', result.computer.id);
          this.service.updateData(result.dataKey).subscribe(data => {
            const index = this.computers.findIndex(computer => computer.id === data.id);
            this.computers[index] = data;
         });
        }

        if (action === 'NEW') {
          this.service.save(result.dataKey).subscribe(data => {
            this.computers.push(data);
          });
        }
      }
    });
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.computers = data;
    });
  }

}
