import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';
export interface DialogDataClient {
  client : Array<any>;
  id: number;
}

@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.scss']
})
export class ModalClientComponent implements OnInit {
  client: Array<any>=[];
  name: string ='';
  cnpj: number | undefined;
  razaoSocial: string ='';
  startDate : Date = new Date(2022, 0, 1);





  constructor(public dialogRef: MatDialogRef<ModalClientComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataClient) { }

  ngOnInit(): void {
    this.client.push(this.data.client);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  async editClient(){
    this.client= await this.httpService.put(`client`,{name:this.name,cnpj: this.cnpj,razaoSocial: this.razaoSocial, dateClient:  this.startDate, id : this.data.id});
    this.dialogRef.close();
  }
  async deleteClient(){
    this.client= await this.httpService.patch(`client/${this.data.id}`,{});
    this.dialogRef.close();
  }

}
