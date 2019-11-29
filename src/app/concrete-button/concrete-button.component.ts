import { Component, OnInit } from '@angular/core';
import {AbstractButton} from '../AbstractButton';

@Component({
  selector: 'app-concrete-button',
  templateUrl: './concrete-button.component.html',
  styleUrls: ['./concrete-button.component.css']
})
export class ConcreteButtonComponent implements OnInit {

  concreteButton: AbstractButton = {
    backgroundColor: 'red',
    border: '2px solid black',
    textValue: 'TEST',
    textColor: 'black'
  };
  constructor() { }

  ngOnInit() {
  }

}
