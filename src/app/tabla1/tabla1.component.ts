import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { UsuaService } from '../usua.service';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Usua } from '../usua';


@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css']
})
export class Tabla1Component implements OnInit {

  //dataSource = new MatTableDataSource(this.usuaService);
  dataSource = new UserDataSource(this.usuaService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private usuaService: UsuaService) { }

  ngOnInit(): void {
  //  this.dataSource.paginator = this.paginator;
  //  this.dataSource.sort = this.sort;
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private usuaService: UsuaService) {
    super();
  }
  connect(): Observable<Usua[]> {
    return this.usuaService.getUser();
  }
  disconnect() {}
}
