import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSaleProductComponent } from './top-sale-product.component';

describe('TopSaleProductComponent', () => {
  let component: TopSaleProductComponent;
  let fixture: ComponentFixture<TopSaleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSaleProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
