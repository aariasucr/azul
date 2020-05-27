import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorComponent} from './author.component';

import {routes} from '../app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploaderComponent} from '../file-uploader/file-uploader.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {RouteGuard} from '../shared/route-guard';
import { RegistrarUsuarioComponent } from '../registrar-usuario/registrar-usuario.component';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule
      ],
      declarations: [AuthorComponent, HomeComponent, LoginComponent, FileUploaderComponent, RegistrarUsuarioComponent],
      providers: [RouteGuard]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
