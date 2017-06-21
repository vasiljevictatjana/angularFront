import { Injectable } from '@angular/core';

export class SearchResultModel {
  constructor(public id:string, public name:string, public age:number, public surname:string){
    
  }
}

@Injectable()
export class DataService {
  public services:Array<SearchResultModel>;
  
  constructor(){
    this.services = new Array<SearchResultModel>();
    
    this.services.push(new SearchResultModel("12345", "John", 25, "Doe"));
    this.services.push(new SearchResultModel("12346", "Jane", 27, "Smith"));
    this.services.push(new SearchResultModel("12347", "Peter", 30, "Parker"))
  }
}