
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Consent } from 'src/app/Models/consent';
import { Observable } from 'rxjs';
import { PaginatedResult, Pagination } from '../Models/pagination';

@Injectable({
    providedIn: 'root'
  })
  
  export class ConsentService {
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }
    
    skip(itemsToBeSkept: number, items: any[]) {
      return items.filter((x, i) => { if(i > (itemsToBeSkept -1)) { return true; } } );
    }
    
    getPaginatedConsents(pageNumber: number, pageSize: number): Observable<PaginatedResult<Consent[]>> {
      return this.http.get<Consent[]>(this.baseUrl + '/Consents')
      .pipe(
        map(response => {
          let count = response.length;
          let items = this.skip((pageNumber - 1) * pageSize, response).slice(0, pageSize);
          return this.getConsentPagedResult(items, count, pageNumber, pageSize);
        })
      );
  }
  
  private getConsentPagedResult(items: Consent[], count: number, pageNumber: number, pageSize: number): PaginatedResult<Consent[]> {
    let pagedResult: PaginatedResult<Consent[]> = {
      pagination: {
        itemsPerPage: pageSize,
        currentPage: pageNumber,
        totalItems: count,
        totalPages: Math.ceil(count / pageSize)
      } as Pagination,
      result: items
    } as PaginatedResult<Consent[]>;

    return pagedResult;
  }
  
  createConsent(consent: Consent): Observable<HttpResponse<Consent>> {
       let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
      });
       return this.http.post<Consent>(this.baseUrl + '/Consents', consent, { headers: httpHeaders, observe: 'response' });
    }
  }
