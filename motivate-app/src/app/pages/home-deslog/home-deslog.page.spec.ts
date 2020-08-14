import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDeslogPage } from './home-deslog.page';

describe('HomeDeslogPage', () => {
  let component: HomeDeslogPage;
  let fixture: ComponentFixture<HomeDeslogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDeslogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDeslogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
