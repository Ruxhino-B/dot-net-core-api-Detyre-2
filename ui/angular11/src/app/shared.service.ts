import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
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

  getProvimePedagog():Observable<any[]>{    
    return this.http.get<any[]>(this.APIUrl+'/ProvimePedagog');
  }

  getProvimeStudent():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ProvimeStudent');
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

  getDegaImport():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/orari/Dega');
  }

  getVitiStudent():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ProvimeStudent/VitiStudent');
  }

  getParaleli():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ProvimeStudent/Paraleli');
  }

  getDega():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/ProvimeStudent/dega');
  }

  getVitiLenda():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/orari/VitiLenda');
  }

  getLenda():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/orari/Lenda');
  }
  
  addImportLendet(val:any){
    return this.http.post(this.APIUrl+'/importlendet',val);
  }

}
