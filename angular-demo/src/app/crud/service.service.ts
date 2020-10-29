import { Injectable } from '@angular/core';

import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private apiUrl="http://localhost:8081";

  constructor(private httpClient:HttpClient) { }
getAll(){
  return this.httpClient.get(this.apiUrl+'/details/')
}
create(post) {
  return this.httpClient.post(this.apiUrl+'/add/',post)
}
find(id){
  return this.httpClient.get(this.apiUrl+'/details/'+id)
}
update(id,post){
  return this.httpClient.put(this.apiUrl+'/update/'+id,post)
}
delete(id){
  return this.httpClient.delete(this.apiUrl+'/delete/'+id)
}

}

