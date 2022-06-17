import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { DialogAddOrderComponent } from './dialog-add-order.component';

describe('DialogAddOrderComponent', () => {
  let component: DialogAddOrderComponent;
  let fixture: ComponentFixture<DialogAddOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogRef],
      declarations: [DialogAddOrderComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
