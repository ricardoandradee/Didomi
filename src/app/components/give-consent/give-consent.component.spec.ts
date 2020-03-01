import { GiveConsentComponent } from './give-consent.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

describe('GiveConsentComponent', () => {
    let component: GiveConsentComponent;
    let fixture: ComponentFixture<GiveConsentComponent>;

    // Gets promises that will get compiled when the test runs.
    beforeEach(async(() => {
        // Arrange
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(GiveConsentComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should create the component', () => {
        // Assert (Expect)
        expect(component).toBeTruthy();
    });
});
