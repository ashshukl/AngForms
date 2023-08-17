import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webclient',
  templateUrl: './webclient.component.html',
  styleUrls: ['./webclient.component.css']
})
export class WebclientComponent implements OnInit {

  public jsonOP: any;
  public jsonIP: any;
  public displayedColumns: string[] =  ['userId', 'id', 'title', 'body'];
  constructor (private httpClient : HttpClient) {

  }

  ngOnInit(){
    this.getData();
    this.putData();

    console.log('OnInit Finished');
  }

  getData(){
      this.httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe( (data) => {
      
      if (Array.isArray(data)){
        this.jsonOP = data;
      }
      else {
        this.jsonOP = [data];
      }
      
      })
      
      console.log('getData Finished');
  }

  putData(){
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts',{title: 'Mr.', body: 'Singh',userId: 1,}).subscribe( (data) => {
      this.jsonIP = [data];
    })
}

}
