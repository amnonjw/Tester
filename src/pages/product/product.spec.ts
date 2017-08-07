import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ProductPage } from './product';
import { ProductsProvider } from '../../providers/products/products';
import { ProductsMock } from '../../mocks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {} from 'jasmine';
 
let comp: ProductPage;
let fixture: ComponentFixture<ProductPage>;
let de: DebugElement;
let el: HTMLElement;
 
describe('Page: Product Page', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [MyApp, ProductPage],
 
            providers: [
                NavController, 
                { 
                    provide: ProductsProvider, 
                    useClass: ProductsMock
                },
    StatusBar,
    SplashScreen,
            ],
 
            imports: [
                IonicModule.forRoot(MyApp)
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(ProductPage);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
 
    /*it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });
 
    it('displays products containing a title, description, and price in the list', () => {
 
        let productsService = fixture.debugElement.injector.get(ProductsProvider);
        let firstProduct = productsService.products[0];
 
        fixture.detectChanges();
 
        de = fixture.debugElement.query(By.css('ion-list ion-item'));
        el = de.nativeElement; 
 
        expect(el.textContent).toContain(firstProduct.title);
        expect(el.textContent).toContain(firstProduct.description);
        expect(el.textContent).toContain(firstProduct.price);
 
    });*/
 
 
});