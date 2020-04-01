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
      data: {computer}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.submitted) {

        if (action === 'EDIT') {
          this.service.updateData(computer.id, computer).subscribe(() => {
            this.loadTable();
          });
        }

        if (action === 'NEW') {
          this.service.save(computer).subscribe(() => {
            this.loadTable();
          });
        }
      }
    });
  }

  loadTable() {
    this.service.findAll().subscribe(entries => {
      this.computers = entries;
    });
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.computers = data;
    });
  }

}
