import {Component, Input, OnInit} from '@angular/core';
import {AbstractTable} from '../AbstractTable';

@Component({
  selector: 'app-table-interface',
  templateUrl: './table-interface.component.html',
  styleUrls: ['./table-interface.component.css']
})
export class TableInterfaceComponent implements OnInit {

  @Input() interfaceTable: AbstractTable;
  constructor() { }

  ngOnInit() {
  }

}
