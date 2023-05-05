import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  public image:string="https://www.lostiempos.com/sites/default/files/659696.jpg";
  public Titulo:string="MI Web CCS";

  constructor(){}

}
