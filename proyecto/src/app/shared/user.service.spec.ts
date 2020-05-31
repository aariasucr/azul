import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrarUsuarioComponent } from '../registrar-usuario/registrar-usuario.component';

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [RegistrarUsuarioComponent]
    })
  );

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
