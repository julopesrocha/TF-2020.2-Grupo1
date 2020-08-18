import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowUsersPage } from './follow-users.page';

describe('FollowUsersPage', () => {
  let component: FollowUsersPage;
  let fixture: ComponentFixture<FollowUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
