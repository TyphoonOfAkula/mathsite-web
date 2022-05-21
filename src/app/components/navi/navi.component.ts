import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentCategory } from 'src/app/models/contentCategory';
import { AuthService } from 'src/app/services/auth.service';
import { ContentCategoryService } from 'src/app/services/content-category.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  providers: [ContentCategoryService],
})
export class NaviComponent implements OnInit {
  imgSrc = 'assets/images/e.png';
  constructor(
    private contentCategoryService: ContentCategoryService,
    private authService: AuthService,
  ) {
    authService.loggedIn.subscribe((status:boolean)=>{
      this.isLogged = status
    })
  }
  mathCategories: ContentCategory[] = [];
  geoCategories: ContentCategory[] = [];
  physicsCategories: ContentCategory[] = [];

  isLogged: boolean = false;
  userName:string="";

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn());
    this.isLogged = this.authService.isLoggedIn();
    this.userName=this.authService.getUserName();
    this.mathCategories = this.contentCategoryService.getMathCategories();
    this.geoCategories = this.contentCategoryService.getGeoCategories();
    this.physicsCategories = this.contentCategoryService.getPhysicsCategories();
  }

  logout(): void {
    this.authService.logout();
    this.ngOnInit()
  }

    
}
