import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://localhost:3000';

  async get(path: string): Promise<any> {
    const res = await axios.get(`${this.baseUrl}/${path}`);
    return res.data;
  }

  async post(path: string, data: any): Promise<any> {
    const res = await axios.post(`${this.baseUrl}/${path}`);
    return res.data;
  }
}
