import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-listage',
  templateUrl: './listage.component.html',
  styleUrls: ['./listage.component.scss']
})
export class ListageComponent implements OnInit {

  public result: any[] = []

  constructor(private httpService: NameService) { }

  ngOnInit(): void {

    this.result = this.httpService.readData();
    this.result.sort(( a, b ) => a.age - b.age);

  }


}
