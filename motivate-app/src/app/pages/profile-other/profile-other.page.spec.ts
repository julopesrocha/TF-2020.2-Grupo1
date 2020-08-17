import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileOtherPage } from './profile-other.page';

describe('ProfileOtherPage', () => {
  let component: ProfileOtherPage;
  let fixture: ComponentFixture<ProfileOtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileOtherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileOtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
