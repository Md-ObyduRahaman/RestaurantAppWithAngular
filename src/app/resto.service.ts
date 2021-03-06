import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/restaurant"
  constructor(private http:HttpClient) { }

  getList()
  {
    
    return this.http.get(this.url)
  }
  saveResto(data: any)
  {
    //console.warn(data)
    return this.http.post(this.url,data);
  }

  deleteResto(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }

}
