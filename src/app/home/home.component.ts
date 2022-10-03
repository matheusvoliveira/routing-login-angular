import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log('friendly reminder for Mathew of the future it hasnt"t been easy but you are on the right way ')
  }

  ngOnInit(): void {
  }

}
