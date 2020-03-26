import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/model/computer';
import { ComputerService } from 'src/app/service/computer-service.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  computers: Computer[];

  constructor(private service: ComputerService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.computers = data;
    });
  }

}
