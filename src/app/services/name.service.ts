import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class NameService {

  private BASE_URL = environment.API_URL;

  result: any[] = []

  constructor(private http: HttpClient) {}

  addNameToServer(name:string): Observable<any> {
    return this.http.get<any>(this.BASE_URL + name).pipe(
      catchError(this.handleError))
  };

  saveName(nameProps: Object): any{
    return this.result.push({...nameProps});
  }


  readData(): any {
    return this.result;
  }


  handleError(error: HttpErrorResponse){
    if(error.statusText === "Unprocessable Entity") {
      alert ("Missing 'name' parameter");
    }

    if(error.statusText === "Too Many Requests") {
      alert ("Request limit reached");
    }
    return throwError(error);
  }

}
