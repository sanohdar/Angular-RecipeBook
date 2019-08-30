import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;

  constructor(private dataService:DataStorageService,
              private authService :AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(
      user =>{
        this.isAuth = !!user;
      }
    )
  }

  onSaveData() {
    this.dataService.storeData();
  }

  onFetchData() {
    this.dataService.fetchData().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
