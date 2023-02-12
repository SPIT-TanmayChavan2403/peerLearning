import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name: string = 'default value';
  complete_name: string = 'Default complete name';

  constructor(){};


  sendAuthorName(name:string){
    this.name = name
  }
}
