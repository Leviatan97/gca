import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GcaServiceService {

  constructor(private http: HttpClient) { }

  getSalesman() {
    return this.http.get('http://74.235.109.154/api/salesman').pipe(map((data: any) => {
      return data.filter((item: any) => item.id !== "");
    }))
  }

  createSalesman(data: any) {
    return this.http.post('http://74.235.109.154/api/salesman',data)
  }

  getPerson(id:any) {
    return this.http.get(`http://74.235.109.154/api/salesman/${id}`)
  }
}
