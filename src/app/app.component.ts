import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'macha-app';

  constructor(){
    console.log("app constructor called");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("app OnInit Called")
    firebase.initializeApp({
          apiKey: "AIzaSyAaRzdIMLXeHWLhJjGWqiZpbPh-XdyN1hQ",
          authDomain: "machaapp-6a634.firebaseapp.com",
    });

  }
}
