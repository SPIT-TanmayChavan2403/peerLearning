import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  constructor(private service: DataService){}

  @Input() name = '';

  sendCompleteName(surname:string){
    this.service.completeName = this.name + ' ' + surname;
  }

}
