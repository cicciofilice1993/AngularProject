import { Component, OnInit } from '@angular/core';
import {AttributiTabella} from '../AttributiTabella';
import {AbstractTable} from '../AbstractTable';
import {TableInterfaceComponent} from '../table-interface/table-interface.component';

@Component({
  selector: 'app-concrete-table',
  templateUrl: './concrete-table.component.html',
  styleUrls: ['./concrete-table.component.css']
})
export class ConcreteTableComponent implements OnInit {

  intestazione: AttributiTabella[] = [
    {
      idColonna: '1',
      nomeAttributoColonna: 'Marca'
    },
    {
      idColonna: '2',
      nomeAttributoColonna: 'Modello'
    },
    {
      idColonna: '3',
      nomeAttributoColonna: 'Cavalli'
    }
  ];

  concreteTable: AbstractTable = {
    intestazione: this.intestazione,
    dato: [
      {
        1 : 'Mercedes',
        2 : 'A220',
        3 : '150'
      },
      {
        1: 'BMW',
        2: '218D',
        3: '150',
        address: {
          name: 'francesco',
          surname: 'filice'
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
