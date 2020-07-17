import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/model/computer';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { EditComponent } from 'src/app/edit/edit.component';
import { Sort } from '@angular/material';
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
          });
        }

        if (action === 'NEW') {
          this.computerFacade.saveComputer(result.dataKey).subscribe(data => {
            console.log('Computer Windows version: ' + result.dataKey.winVersion);
            console.log('Computer Windows version data returned: ' + data.winVersion);
            this.computers.push(data);
          });
        }
      }
    });
  }

  sortData(sort: Sort) {
    const data = this.computers.slice();
    if (!sort.active || sort.direction === '') {
      this.computers = data;
      return;
    }

    this.computers = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'computerName': return this.compare(a.computerName, b.computerName, isAsc);
        case 'userName': return this.compare(a.userName, b.userName, isAsc);
        case 'userSurname': return this.compare(a.userSurname, b.userSurname, isAsc);
        case 'description': return this.compare(a.description, b.description, isAsc);
        case 'winVersion': return this.compare(a.winVersion, b.winVersion, isAsc);
        case 'lastUpdate': return this.compare(a.lastUpdate, b.lastUpdate, isAsc);
        case 'domainMigration': return this.compare(a.domainMigration, b.domainMigration, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string | Date | boolean, b: number | string | Date | boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  delete(computer: Computer) {
    this.computerFacade.deleteComputer(computer.id).subscribe(() => {
      this.computers = this.computers.filter(item => item !== computer);
    });
    console.log('Computer id:  ', computer.id);
  }

  ngOnInit() {
    this.computerFacade.getAllComputers().subscribe(data => {
      this.computers = data;
      this.dataSource = new MatTableDataSource(this.computers);
    });
  }

}
