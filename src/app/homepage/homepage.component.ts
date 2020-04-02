import { Component, OnInit } from '@angular/core';
import  Papa  from 'papaparse';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
  }

onChange(files: File[]){
    
    if(files[0]){
      //console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result,file) => {
          //console.log(result);
          this.dataSource.data=result.data;
          console.log(this.dataSource.data);
          //this.dataList = result.data;
        }
      });
    }
  }

autentificar(){
  var ovtweb = null
  ovtweb = window.open('http://ovt.mintrabajo.gob.bo', 'Pagina_CNN', 'width=600,height=400,left=200,top=200');
  //ovtweb.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

}

}