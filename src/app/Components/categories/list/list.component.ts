import { Component, OnInit } from '@angular/core';
import { CatFormComponent } from '../form/form.component';
import axios from 'axios';
import { NgFor } from '@angular/common';
import { MessageService } from '../../../Services/MessageService';

@Component({
  selector: 'app-catlist',
  standalone: true,
  imports: [CatFormComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class CatListComponent implements OnInit {
  allCategories: { kategoriaNev: string; id: number }[] = [];

  getData = async () => {
    const res = await axios.get('http://localhost:3000/kategoria');
    return res.data;
  };

  constructor(private messageService: MessageService) {
    this.messageService.click$.subscribe(() => {
      // Itt kezeled a click eseményt
      console.log('Kategória hozzáadva, frissítem a listát...');
      this.getData().then((data) => {
        this.allCategories = data;
      });
    });
  }

  ngOnInit(): void {
    // Inicializálja a követkőt:
    this.getData().then((data) => {
      this.allCategories = data;
      console.log(this.allCategories);
    });
  }
}
