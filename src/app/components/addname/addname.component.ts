import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-addname',
  templateUrl: './addname.component.html',
  styleUrls: ['./addname.component.scss']
})
export class AddnameComponent implements OnInit, OnDestroy {

  public text: string = '';
  private subscription!: Subscription;
  public requestCounter: number = 0;

  constructor(private httpService: NameService) { }

  ngOnInit(
    
  ): void {
  }

  onSubmit() {

   this.subscription =  this.httpService.addNameToServer(this.text)
        .subscribe((data) => {
          if(data.hasOwnProperty('name')) {
            this.requestCounter ++;
            console.log(this.requestCounter)
            if(this.requestCounter === 600) {
              alert('you reached 600 Request for Today')
              return;
            } else {
              this.httpService.saveName(data);
            }
            // if new Date reset the requestCounter
            if(this.isTomorrow(new Date())) {
              this.requestCounter = 0;
            }
          }
          this.text = '';

        })
  }


  isTomorrow(date: Date):Boolean {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (tomorrow.toDateString() === date.toDateString()) {
      return true;
    }
  
    return false;
  }
  


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}



