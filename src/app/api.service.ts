import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getPengumuman() {
    return this.http.get('https://harlanprofile.000webhostapp.com/pengumuman-read.php');
  }
  addPengumuman(data: any) {
    return this.http.get(
      `https://harlanprofile.000webhostapp.com/pengumuman-create.php?Judul=${data.Judul}&Isi=${data.Isi}&Waktu=${data.Waktu}`
    );
  }
  deletePengumuman(idPengumuman: any) {
    return this.http.get(
      `https://harlanprofile.000webhostapp.com/pengumuman-delete.php?idPengumuman=${idPengumuman}`
    );
  }
  editPengumuman(data: any) {
    return this.http.get(
      `https://harlanprofile.000webhostapp.com/pengumuman-update.php?Judul=${data.Judul}&Isi=${data.Isi}&Waktu=${data.Waktu}&idpengumuman=${data.idpengumuman}`
    );
  }
  Login(Username: any, Password: any) {
    return this.http.get(
      `https://harlanprofile.000webhostapp.com/pengumuman-login.php?Username=${Username}&Password=${Password}`
    );
  }
}
