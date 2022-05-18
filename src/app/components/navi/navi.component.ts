import { Component, OnInit } from '@angular/core';
import { ContentCategory } from 'src/app/models/contentCategory';
import { ContentCategoryService } from 'src/app/services/content-category.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  providers:[ContentCategoryService]
})
export class NaviComponent implements OnInit {
  imgSrc = "assets/images/e.png"
  constructor(private contentCategoryService:ContentCategoryService) { }
  mathCategories:ContentCategory[]=[]
  geoCategories:ContentCategory[]=[]
  physicsCategories:ContentCategory[]=[]

  ngOnInit(): void {
    this.mathCategories=this.contentCategoryService.getMathCategories();
    this.geoCategories=this.contentCategoryService.getGeoCategories();
    this.physicsCategories=this.contentCategoryService.getPhysicsCategories();
    
  }

}
