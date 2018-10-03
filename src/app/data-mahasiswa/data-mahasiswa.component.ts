import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-data-mahasiswa',
  templateUrl: './data-mahasiswa.component.html',
  styleUrls: ['./data-mahasiswa.component.css']
})
export class DataMahasiswaComponent implements OnInit {
NIM='';
Nama='';
Kelas='';
DaftarMhs:Mahasiswa[]=[];
Mhs;

  constructor() { }

  ngOnInit() {
  }
  tambahMhs(){
    this.Mhs=new Mahasiswa(this.NIM,this.Nama,this.Kelas);
    this.DaftarMhs.push(this.Mhs)
    this.NIM="";
    this.Nama="";
    this.Kelas="";
  }
}