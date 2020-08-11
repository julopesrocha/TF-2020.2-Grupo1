import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChallengePagePage } from './challenge-page.page';

describe('ChallengePagePage', () => {
  let component: ChallengePagePage;
  let fixture: ComponentFixture<ChallengePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
