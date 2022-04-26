import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-listnames',
  templateUrl: './listnames.component.html',
  styleUrls: ['./listnames.component.scss']
})
export class ListnamesComponent implements OnInit {

  public result: any[] = []

  constructor(private httpService: NameService) { }

  ngOnInit(): void {
    
    this.result = this.httpService.readData();
    this.result.sort(( a, b ) => a.name < b.name ? -1 : 1 );
     
  }



}
