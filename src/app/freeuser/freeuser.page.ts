import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-freeuser',
  templateUrl: './freeuser.page.html',
  styleUrls: ['./freeuser.page.scss'],
})
export class FreeuserPage implements OnInit {

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

  ngOnInit() {
  }

}
