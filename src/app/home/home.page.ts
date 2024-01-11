import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private _apiService: ApiService) {
    this._apiService.getPengumuman().subscribe(
      (res: any) => {
        console.log('Berhasil', res);
        this.Pengumuman = res;
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  Pengumuman: any;

  idpengumuman: any;
  Judul: any;
  Isi: any;
  Waktu: any;
  Button: any = 'Tambah';

  addPengumuman() {
    let data = {
      Judul: this.Judul,
      Isi: this.Isi,
      Waktu: this.Waktu,
      idpengumuman: this.idpengumuman,
    };

    if (this.Button == 'Edit') {
      this._apiService.editPengumuman(data).subscribe(
        (res: any) => {
          console.log('Berhasil Edit Data Pengumuman', res);
          this.Judul = '';
          this.Isi = '';
          this.Waktu = '';
          window.location.reload();
        },
        (error: any) => {
          console.log('Gagal Edit Data Pengumuman', error);
        }
      );
    } else {
      this._apiService.addPengumuman(data).subscribe(
        (res: any) => {
          console.log('Berhasil Menambahkan Data Pengumuman', res);
          this.Judul = '';
          this.Isi = '';
          this.Waktu = '';
          window.location.reload();
        },
        (error: any) => {
          console.log('Gagal Menambahkan Data Pengumuman', error);
        }
      );
    }
  }
  HapusPengumuman(idPengumuman: any) {
    this._apiService.deletePengumuman(idPengumuman).subscribe(
      (res: any) => {
        console.log('Berhasil', res);
        window.location.reload();
      },
      (error: any) => {
        console.log('Gagal', error);
      }
    );
  }
  EditPengumuman(data: any) {
    this.idpengumuman = data.idpengumuman;
    this.Judul = data.judul;
    this.Isi = data.isi;
    this.Waktu = data.waktu;
    this.Button = 'Edit';
  }
}
