import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MessageService } from '../../Services/MessageService';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss',
})
export class StatComponent implements OnInit {
  allStats: any[] = [];

  getData = async () => {
    const res = await axios.get('http://localhost:3000/statics');
    return res.data;
  };

  ngOnInit(): void {
    // Inicializálja a követkőt:
    this.getData().then((data) => {
      this.allStats = data;
      //console.log(this.allTrafics);
    });
  }
}
