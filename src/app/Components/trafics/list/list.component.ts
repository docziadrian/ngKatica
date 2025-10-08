import { Component, OnInit } from '@angular/core';
import { TraficsFormComponent } from '../form/form.component';
import axios from 'axios';
import { MessageService } from '../../../Services/MessageService';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-traflist',
  standalone: true,
  imports: [TraficsFormComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class TrafListComponent implements OnInit {
  allTrafics: any[] = [];

  getData = async () => {
    const res = await axios.get('http://localhost:3000/forgalom');
    return res.data;
  };

  constructor(private messageService: MessageService) {
    this.messageService.click$.subscribe(() => {
      // Itt kezeled a click eseményt
      console.log('Kategória hozzáadva, frissítem a listát...');
      this.getData().then((data) => {
        this.allTrafics = data;
      });
    });
  }

  ngOnInit(): void {
    // Inicializálja a követkőt:
    this.getData().then((data) => {
      this.allTrafics = data;
      console.log(this.allTrafics);
    });
  }
}
