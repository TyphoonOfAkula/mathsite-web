import { Injectable } from '@angular/core';
import { ContentCategory } from '../models/contentCategory';
import categories from './contentCategories.json';

@Injectable()
export class ContentCategoryService {
  constructor() {}

  getMathCategories(): ContentCategory[] {
    let contentCategories: ContentCategory[] = [];
    categories.math.forEach((category) => {
      contentCategories.push(category);
    });
    return contentCategories;
  }
  getGeoCategories(): ContentCategory[] {
    let contentCategories: ContentCategory[] = [];
    categories.geometry.forEach((category) => {
      contentCategories.push(category);
    });
    return contentCategories;
  }
  getPhysicsCategories(): ContentCategory[] {
    let contentCategories: ContentCategory[] = [];
    categories.physics.forEach((category) => {
      contentCategories.push(category);
    });
    return contentCategories;
  }
}
