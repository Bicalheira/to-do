import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'bolttech-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  constructor(private router: Router, private dataService: DataService) { }

  logout() {
    this.dataService.clearSession()
    this.router.navigate([''])
  }


}