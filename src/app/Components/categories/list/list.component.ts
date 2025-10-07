import { Component, OnInit } from '@angular/core';
import { CatFormComponent } from '../form/form.component';
import axios from 'axios';
import { NgFor } from '@angular/common';

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

  ngOnInit(): void {
    // Inicializálja a követkőt:
    this.getData().then((data) => {
      this.allCategories = data;
      console.log(this.allCategories);
    });
  }
}
