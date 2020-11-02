import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NestedserviceService {
  update(id: any, value: any) {
    throw new Error('Method not implemented.');
  }
  find(id: any) {
    throw new Error('Method not implemented.');
  }
private apiUrl="http://localhost:8081";
  constructor(private httpClient:HttpClient) {}
    get(){
      return this.httpClient.get(this.apiUrl+'/studentslist/');
    }
    create(data){
      return this.httpClient.post(this.apiUrl+'/postofdata/',data);
    }
    view(id){
      return this.httpClient.get(this.apiUrl+'/student/'+id);
    }
    edit(id,data){
      return this.httpClient.get(this.apiUrl+'/updatadetails/'+id,data);
    }
    delete(id){
      return this.httpClient.get(this.apiUrl+'/deletestudent/'+id);
    }
   
}
