import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getOrari():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/orari');
  }

  getProvimePedagog(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ProvimePedagog');
  }

  getProvimeStudent():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ProvimeStudent');
  }

  addOrari(val:any){
    return this.http.post(this.APIUrl+'/orari',val);
  }

  updateDisponibel(val:any){
    return this.http.put(this.APIUrl+'/orari',val);
  }

  getOnlyKlasa():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/orari/getOnlyKlasa');
  }

  getOnlyDita():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/orari/GetOnlyDita');
  }

  getOnlyPedagog():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ProvimePedagog/GetOnlyPetagog');
  }

  getOnlyDega():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/orari/Dega')
  }

  


}
