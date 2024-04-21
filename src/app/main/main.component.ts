import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

interface data {
  name: string;

}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dynamicDialogRef: DynamicDialogRef) {}
  values!: string[];
  
  social!: data[];
  new!:data[];
  value!:string[]
  max:number = 3

  selecteddata!: data;
  selectednew!:data;

  ngOnInit() {
      this.social = [
          { name: ' انستجرام' },
          { name: ' فيسبوك' },
          { name: ' تويتر' },    
      ];

      this.new = [
 
        { name: ' فيكتوريا' },
        { name: 'ميفيدا' },
        { name: ' سراي' },   
        
    ];
  }

  addChip(event: any) {
    if (this.values.length == Number(this.max)) {
      this.values.push('+3');
    }
  }

  close(){
    this.dynamicDialogRef.close()
  }
}
