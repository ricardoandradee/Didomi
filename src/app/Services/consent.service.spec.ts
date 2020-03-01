import { ConsentService } from "./consent.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { CONSENTS } from '../../../server/db-data';
import { Consent } from '../Models/consent';

describe('ConsentService', () => {
    const baseUrl = environment.apiUrl;
    let consentService: ConsentService;
    let httpTestingController: HttpTestingController;

    // This will be executed before each code block.
    beforeEach(() => {
        // Arrange
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ConsentService
            ]
        });

        consentService = TestBed.get(ConsentService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should retrieve first page consent list', () => {
        // Act
        consentService.getPaginatedConsents()
            .subscribe(consents => {
                // Assert (Expect)
                console.log('Numebr of items is equals to: ' + consents.result.length);
                expect(consents).toBeTruthy('No consents retruned.');
                expect(consents.result.length).toBe(2, 'incorrect number of consents.');
                expect(consents.pagination.currentPage).toBe(1, 'Current page number is incorrect.');
                expect(consents.pagination.itemsPerPage).toBe(2, 'Current page number is incorrect.');
                expect(consents.pagination.totalItems).toBe(7, 'Total number of items is incorrect.');
                expect(consents.pagination.totalPages).toBe(4, 'Total number of pages is incorrect.');
            });

        // Assert (Expect) --> HTTP call and verify if the right HTTP verb is being called.
        const req = httpTestingController.expectOne(baseUrl + '/Consents');
        expect(req.request.method).toEqual('GET');
        req.flush(CONSENTS);
    });

    it('should retrieve last page consent list, with one item', () => {
        // Act
        consentService.getPaginatedConsents(4)
            .subscribe(consents => {
                // Assert (Expect)
                console.log('Numebr of items is equals to: ' + consents.result.length);
                expect(consents).toBeTruthy('No consents retruned.');
                expect(consents.result.length).toBe(1, 'incorrect number of consents.');
                expect(consents.pagination.currentPage).toBe(4, 'Current page number is incorrect.');
                expect(consents.pagination.itemsPerPage).toBe(2, 'Current page number is incorrect.');
                expect(consents.pagination.totalItems).toBe(7, 'Total number of items is incorrect.');
                expect(consents.pagination.totalPages).toBe(4, 'Total number of pages is incorrect.');
            });
        
        // Assert (Expect) --> HTTP call and verify if the right HTTP verb is being called.
        const req = httpTestingController.expectOne(baseUrl + '/Consents');
        expect(req.request.method).toEqual('GET');
        req.flush(CONSENTS);
    });
    it('should save consent', () => {
        // Arrange
        const newConsent: Consent = { id: 8, name: 'Ricardo Novais de Andrade', email: 'ricardoo.developer@gmail.com',
                    beShownTargetedAds: true, receiveNewsletter: false, contributeToAnonymousVisitStatistics: true};

        // Act
        consentService.createConsent(newConsent).subscribe(consent => {
            expect(consent.body.id).toBe(8);
        });

        // Assert (Expect) --> HTTP call, verify if the right HTTP verb is being called
        // and check result.
        const req = httpTestingController.expectOne(baseUrl + '/Consents');
        expect(req.request.method).toEqual('POST');
        expect(req.request.body.name)
        .toEqual(newConsent.name);
        expect(req.request.body.email)
        .toEqual(newConsent.email);
        expect(req.request.body.beShownTargetedAds)
        .toEqual(newConsent.beShownTargetedAds);
        expect(req.request.body.receiveNewsletter)
        .toEqual(newConsent.receiveNewsletter);
        expect(req.request.body.contributeToAnonymousVisitStatistics)
        .toEqual(newConsent.contributeToAnonymousVisitStatistics);

        req.flush(newConsent);
    });

    // This will be executed after each code block.
    afterEach(() => {
        // To make sure that the only api being called is the one being tested.
        httpTestingController.verify();
    });
});
