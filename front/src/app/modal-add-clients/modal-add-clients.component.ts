import { Component, OnInit } from '@angular/core';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';


@Component({
  selector: 'app-modal-add-clients',
  templateUrl: './modal-add-clients.component.html',
  styleUrls: ['./modal-add-clients.component.scss']
})
export class ModalAddClientsComponent implements OnInit {
  client: Array <any>=[];
  name: string ='';
  cnpj: string ='';
  razaoSocial: string ='';
  startDate : Date = new Date(2022, 0, 1);

  constructor(public dialogRef: MatDialogRef<ModalAddClientsComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async clientAdd() {
    this.client= await this.httpService.post('client', { name: this.name, cnpj: this.cnpj, razaoSocial: this.razaoSocial, dateClient: this.startDate});
    this.onNoClick();
    }

}
