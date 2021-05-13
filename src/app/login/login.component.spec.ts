import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let formBuilder: FormBuilder = new FormBuilder();


  beforeEach(() => {
    component = new LoginComponent(new FormBuilder());
  });
  /*
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    component.loginForm = formBuilder.group({
      user: [''],
      pass: [''],
    });
  });



   it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('login should response ok', () => {

    component.loginForm = formBuilder.group({
      user: 'admin',
      pass: 'admin'
    });

    expect(component.loginUser()).toEqual("OK");
  }); */


  describe('addNumbers', () => {
    it('should add together the 2 numbers passed', () => {

      const result = component.addNumbers(1, 3);

      expect(result).toEqual(4);
    });


  });

  describe('login', () => {
    it('login should response ok', () => {

      component.loginForm = formBuilder.group({
        user: 'admin',
        pass: 'admin'
      });

      expect(component.loginUser()).toEqual("OK");
    });

    it('login should response fail', () => {


      component.loginForm = formBuilder.group({
        user: 'admin',
        pass: 'adminn'
      });


      expect(component.loginUser()).toEqual("FAIL");
    });

  });

  /*  it('login should response fail', () => {
     
 
     component.loginForm = formBuilder.group({
       user: 'admin',
       pass: 'adminn'
     }); 
 
 
     expect(component.loginUser()).toEqual("FAIL");
   }); */
});
