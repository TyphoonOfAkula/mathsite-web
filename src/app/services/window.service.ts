import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor( private location: Location) { }

  refresh(){
    window.location.reload();
  }
  goto(path:string){
    this.location.go(path)
  }
  goOrigin(){
    this.goto("/")
  }
}
