import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient, private constants: Constants) {
    // Change the URL to categories endpoint (if you have a specific endpoint for categories)
    this.apiUrl = `${this.constants.API_ENDPOINT}/products`; 
  }

  // Récupérer les catégories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.constants.API_ENDPOINT}/products`).pipe(
      map(products => {
        const categories = products.map(product => product.category); 
        // Filtrer les doublons par `_id`
        const uniqueCategories = categories.filter((cat, index, self) => 
          index === self.findIndex(c => c._id === cat._id)
        );
        return uniqueCategories;
      })
    );
  }

 
  }
  
  
