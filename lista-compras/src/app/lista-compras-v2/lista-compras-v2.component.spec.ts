import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComprasV2Component } from './lista-compras-v2.component';

describe('ListaComprasV2Component', () => {
  let component: ListaComprasV2Component;
  let fixture: ComponentFixture<ListaComprasV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComprasV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComprasV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
