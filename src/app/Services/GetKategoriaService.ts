import axios from 'axios';

export const getKategoria = async () => {
  try {
    const res = await axios.get('http://localhost:3000/kategoria');
    return res.data;
  } catch (error) {
    console.error('Hiba tortent a kategoria adatok elerese soran:', error);
    return [];
  }
};
