import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ConsentsComponent } from './consents.component';
import { DebugElement } from '@angular/core';
import { CONSENTS } from 'server/db-data';
import { Pagination } from 'src/app/Models/pagination';
import { By } from '@angular/platform-browser';

describe('ConsentsComponent', () => {
    let component: ConsentsComponent;
    let fixture: ComponentFixture<ConsentsComponent>;
    let el: DebugElement;

    // Gets promises that will get compiled when the test runs.
    beforeEach(async(() => {
        // Arrange
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(ConsentsComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
            component.pagConsents = CONSENTS;
            component.pagination = { currentPage: 1, totalItems: 7, itemsPerPage: 2, totalPages: 4 } as Pagination;
        });
    }));

    it('should create the component', () => {
        // Assert (Expect)
        expect(component).toBeTruthy();
    });

    it('should display paged consent list', () => {
        // Act
        fixture.detectChanges();

        // Arrange
        const table = el.query(By.css('.table-striped'));
        const tr = table.queryAll(By.css('tbody tr'));

        // Assert (Expect)
        expect(tr).toBeTruthy('Could not find consents.');
        expect(tr.length).toBe(7, 'Unexpected number of consents.');
      });

    it('should display the first consent', () => {
        // Act
        fixture.detectChanges();

        // Arrange
        const consent = component.pagConsents[0];
        const firstTr = el.query(By.css('.table-striped tbody tr'));
        const id = firstTr.query(By.css('th'));

        // Assert (Expect)
        expect(id.nativeElement.textContent).toBe(consent.id.toString());
      });
});
