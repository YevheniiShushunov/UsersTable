import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from '../table.service';
import { IUser } from '../table.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userDetails?: IUser;
  id: string; 

  constructor(private router: Router, private tabService:TableService) {
    this.id = ""
   }

  ngOnInit(): void {
    this.id = localStorage.id;
    this.tabService.getUserById(this.id);
    this.userDetails = this.tabService.user;
  }

  backToList(){
    this.router.navigate(['/users'])
  }
}
