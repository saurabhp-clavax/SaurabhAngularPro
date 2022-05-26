import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cakeid:any
  baseurl="https://apifromashu.herokuapp.com/api"
  constructor(private http:HttpClient, private cakeidroutes:ActivatedRoute) { 
    this.cakeid = this.cakeidroutes.snapshot.paramMap.get("cakeid")

    console.log(this.cakeid)
  }
  login(body1:any){
    var url=this.baseurl+"/login";
    return this.http.post(url,body1)
  }
  signup(body:any){
    var url=this.baseurl+"/register";
    return this.http.post(url,body)
  }
  cakeapi(){
    var url=this.baseurl+"/allcakes"
    return this.http.get(url)
  }
  detailsapi(){
    var url=this.baseurl+ this.cakeid
  }
}
