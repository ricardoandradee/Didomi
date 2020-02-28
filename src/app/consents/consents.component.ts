import { Component, OnInit, OnDestroy } from '@angular/core';
import { Consent } from '../Models/consent';
import { ConsentService } from '../Services/consent.service';
import { Subscription } from 'rxjs';
import { Pagination, PaginatedResult } from '../Models/pagination';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit, OnDestroy {
  pagination: Pagination;
  
  pagConsents: Consent[] = [];
  headElements = ['Id', 'Name', 'Email', 'Consent given for'];
  private subscription: Subscription;

  constructor(private consentService: ConsentService) { }

  ngOnInit() {
    this.pagination = { currentPage: 1, itemsPerPage: 2 } as Pagination;    
    this.GetConsents();
  }

  private GetConsents() {
    this.subscription = this.consentService.getPaginatedConsents(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((consentsResponse: PaginatedResult<Consent[]>) => {
      console.log(consentsResponse);
      
      this.pagConsents = consentsResponse.result;
      this.pagination = consentsResponse.pagination;
    },
      // Handling error callbacks.
      (err) => { console.error(err); });
  }

  buildConsentString(consent: Consent): string {
    let consentArray = [];
    if(consent.receiveNewsletter){
      consentArray.push("Receive newsletter");
    }
    if(consent.beShownTargetedAds){
      consentArray.push("Be shown targeted ads");
    }
    if(consent.contributeToAnonymousVisitStatistics){
      consentArray.push("Contribute to anonymous visit statistics");
    }
    return consentArray.join(', ');
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.GetConsents();
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}