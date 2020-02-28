import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsentService } from '../Services/consent.service';
import { Consent } from '../Models/consent';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../Services/alertify.service';
import { Router} from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  tmp = false;
  constructor(private consentService: ConsentService, private alertify: AlertifyService, private router: Router) { }

  createConsent(consent: Consent) {
    this.subscription = this.consentService.createConsent(consent)
    .subscribe(response => {
      if (response.status === 201) {
        this.alertify.success('Consent successfully saved!');
        this.router.navigate(['/consents']);
      }
    }, error => {
      this.alertify.error(error);
    });
  }

  onSubmit(form: NgForm) {
    this.createConsent({email: form.value.email, name: form.value.name, receiveNewsletter: form.value.receiveNewsletter,
           beShownTargetedAds: form.value.beShownTargetedAds,
           contributeToAnonymousVisitStatistics: form.value.contributeToAnonymousVisitStatistics } as Consent);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}
