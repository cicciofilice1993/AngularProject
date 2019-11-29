import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractButton} from '../AbstractButton';

@Component({
  selector: 'app-button-interface',
  templateUrl: './button-interface.component.html',
  styleUrls: ['./button-interface.component.css']
})
export class ButtonInterfaceComponent implements OnInit {

  @Input() interfaceButton: AbstractButton;
  @Output() alert = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
