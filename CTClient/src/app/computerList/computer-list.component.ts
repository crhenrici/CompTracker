import { Component, OnInit, ViewChild } from '@angular/core';
import { Computer } from 'src/app/model/computer';
import { MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { EditComponent } from 'src/app/edit/edit.component';
import { ComputerFacade } from '../abstraction/computerFacade';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  computers: Computer[];
  dataSource: MatTableDataSource<Computer>;
  displayedColumns = ['action', 'id', 'computerName', 'description', 'userName', 'userSurname',
    'winVersion', 'lastUpdate', 'domainMigration'];
  searchString: string;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private computerFacade: ComputerFacade, public dialog: MatDialog) { }

  openEdit(action: string, computer?: Computer) {
    const dialogRef = this.dialog.open(EditComponent, {
      height: '500px',
      width: '500px',
      disableClose: true,
      data: { dataKey: computer, act: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.submitted) {

        if (action === 'EDIT') {
          console.log('DataKey: ' + result.dataKey.id);
          // console.log('Computer edit id:  ', result.computer.id);
          this.computerFacade.updateComputer(result.dataKey).subscribe(data => {
            const index = this.computers.findIndex(computer => computer.id === data.id);
            this.computers[index] = data;
            this.dataSource.data = this.computers;
          });
        }

        if (action === 'NEW') {
          this.computerFacade.saveComputer(result.dataKey).subscribe(data => {
            console.log('Computer Windows version: ' + result.dataKey.winVersion);
            console.log('Computer Windows version data returned: ' + data.winVersion);
            this.computers.push(data);
            this.dataSource.data = this.computers;
          });
        }
      }
    });
  }

  compare(a: number | string | Date | boolean, b: number | string | Date | boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  delete(computer: Computer) {
    this.computerFacade.deleteComputer(computer.id).subscribe(() => {
      this.computers = this.computers.filter(item => item !== computer);
      this.dataSource.data = this.computers;
    });
    console.log('Computer id:  ', computer.id);
  }

  ngOnInit() {
    this.computerFacade.getAllComputers().subscribe(data => {
      this.computers = data;
      this.dataSource = new MatTableDataSource(this.computers);
      this.dataSource.sort = this.sort;
    });
  }

}
