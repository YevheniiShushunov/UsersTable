import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private tabService: TableService, private router: Router) { }

  ngOnInit(): void {
    
  }

  getUser(userId:string){
    this.tabService.getUserById(userId);
    this.router.navigate(['/users', userId]);
  }

  displayedColumns: string[] = ['id', 'age', 'address', 'company', 'email', 'name'];
  dataSource = this.tabService.users;
}
