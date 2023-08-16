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

  constructor (private httpClient : HttpClient) {

  }

  ngOnInit(){
    this.getData();
    this.putData();
  }

  getData(){
      this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1').subscribe( (data) => {
        this.jsonOP = data;
      })
  }

  putData(){
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts',{title: 'Mr.', body: 'Singh',userId: 1,}).subscribe( (data) => {
      this.jsonIP = data;
    })
}

}
