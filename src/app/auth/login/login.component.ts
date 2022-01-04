import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public auth2: any;
  public formSubmitted = false;
  public loginForm = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required]],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ngZone: NgZone
  ) {}
  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    this.usuarioService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (this.loginForm.get('remember')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        } else {
          localStorage.removeItem('email');
        }
        //? Navega al dashboard....

        this.ngZone.run(() => {
          this.router.navigateByUrl('/');
        });
      },
      (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      }
    );

    // this.router.navigateByUrl('/');
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      // onsuccess: this.onSuccess,
      // onfailure: this.onFailure,
    });

    this.startApp();
  }

  async startApp() {
    await this.usuarioService.googleInit();
    this.auth2 = this.usuarioService.auth2;

    this.attachSignin(document.getElementById('my-signin2'));
  }

  attachSignin(element: any) {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token;
        this.usuarioService.loginGoogle(id_token).subscribe((resp) => {
          //? Navega al dashboard....
          this.ngZone.run(() => {
            this.router.navigateByUrl('/');
          });
        });
      },
      (err: any) => {
        alert(JSON.stringify(err, undefined, 2));
      }
    );
  }
}
