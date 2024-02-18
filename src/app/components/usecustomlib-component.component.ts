import { Component } from '@angular/core';

@Component({
  selector: 'app-usecustomlib-component',
  templateUrl: './usecustomlib-component.component.html',
  styleUrls: ['./usecustomlib-component.component.css']
})
export class UseCustomLib {
 
  backgroundColor: string = 'lightblue';
  textColor: string = 'darkslategray';
  padding: string = '15px';
  borderRadius: string = '8px';
  customClass: string = 'my-custom-style';

  constructor() { }


  onCustomComponentClicked(): void {
    console.log('CustomizableComponent was clicked!');
   
  } 

  onCustomComponentClick(): void {
    console.log('CustomizableComponent was clicked!');
   
  }
}
