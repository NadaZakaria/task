import { Component } from '@angular/core';
import { DialogService} from 'primeng/dynamicdialog';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
  
})
export class StartComponent {

  constructor(public dialogService: DialogService) {}

  show() {
    this.dialogService.open(MainComponent, { header: 'Select a Product', showHeader:false,
    rtl:true,
    contentStyle:{
     "padding": "0",
     "border-radius": "6px"
   },
    
    modal:true,
    breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
    },});
}
}
