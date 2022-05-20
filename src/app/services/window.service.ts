import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  refresh(){
    window.location.reload();
  }
  goto(path:string){
    window.location.replace(path)
    this.refresh()
  }
  goOrigin(){
    this.goto("/")
  }
}
