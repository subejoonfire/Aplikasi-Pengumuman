import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private _service: ApiService,
    private _router: Router
    ) {}

  Username: any;
  Password: any;
  Login() {
    this._service.Login(this.Username, this.Password).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          console.log('Login berhasil:', res);
          this._router.navigate(['/tabs/home']);
        } else {
          console.error('Login gagal:', res ? res.message : 'Tidak ada respon dari server');
        }
      },
      (error: any) => {
        console.log('Login gagal :', error)
      }
    );
  }
  Lihat(){
    this._router.navigate(['/tabs/freeuser']);
  }
}
