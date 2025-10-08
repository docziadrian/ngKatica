import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormsModule } from '@angular/forms';
import { Termek } from '../../Interfaces/Termek';
import { Kategoria } from '../../Interfaces/Kategoria';
import { getKategoria } from '../../Services/GetKategoriaService';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  allTermek: Termek[] = [];
  kategoriak: Kategoria[] = [];
  showModal: boolean = false;
  showMSG: boolean = false;

  messageMSG: string = '';
  selectedTermek: any = {};

  constructor(private apiService: ApiService) {}

  changeModalState = () => {
    this.showModal = !this.showModal;
  };

  getData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/termekek');
      return res.data;
    } catch (error) {
      console.error('Hiba tortent az adatok elerese soran:', error);
      this.messageMSG = 'Hiba tortent az adatok elerese soran';
      this.showMSG = true;
      return [];
    }
  };

  loadKategoriak = async () => {
    try {
      const data = await getKategoria();
      this.kategoriak = data;
    } catch (error) {
      console.error('Hiba tortent a kategoriak lekerese soran:', error);
      this.kategoriak = [];
    }
  };

  onEditClick = (termek: any) => {
    this.selectedTermek = { ...termek };
    this.changeModalState();
  };

  onSaveChanges = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/termekek/${this.selectedTermek.id}`,
        this.selectedTermek
      );
      const index = this.allTermek.findIndex(
        (t: any) => t.id === this.selectedTermek.id
      );
      if (index !== -1) {
        this.allTermek[index] = { ...this.selectedTermek };
      }

      this.changeModalState();
      this.showMSG = true;
      this.messageMSG = 'Sikeres módosítás';
      this.getData().then((data) => {
        this.allTermek = data;
      });
    } catch (error) {
      console.error('Hiba:', error);
    }
  };

  // Delete
  onDeleteClick = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:3000/termekek/${id}`);
      console.log(res.data);

      this.allTermek = this.allTermek.filter((termek: any) => termek.id !== id);
      this.showMSG = true;
      this.messageMSG = 'Sikeres törlés';
    } catch (error) {
      console.error('Hiba:', error);
      this.showMSG = true;
      this.messageMSG = 'Sikertelen törlés';
    }
  };

  ngOnInit(): void {
    this.getData().then((data) => {
      this.allTermek = data;
    });
    console.log(this.apiService.getService());
  }
}
