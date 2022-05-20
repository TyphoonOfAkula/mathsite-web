import { Component, OnInit } from '@angular/core';
import { ContentCategory } from 'src/app/models/contentCategory';
import { AuthService } from 'src/app/services/auth.service';
import { ContentCategoryService } from 'src/app/services/content-category.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  providers:[ContentCategoryService]
})
export class NaviComponent implements OnInit {
  imgSrc = "assets/images/e.png"
  constructor(private contentCategoryService:ContentCategoryService,private authService:AuthService) { }
  mathCategories:ContentCategory[]=[]
  geoCategories:ContentCategory[]=[]
  physicsCategories:ContentCategory[]=[]

  isLogged:boolean=false;

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn())
    this.isLogged=this.authService.isLoggedIn();
    this.mathCategories=this.contentCategoryService.getMathCategories();
    this.geoCategories=this.contentCategoryService.getGeoCategories();
    this.physicsCategories=this.contentCategoryService.getPhysicsCategories();
    
  }

  logout(): void {
    this.authService.logout()
  }

}
