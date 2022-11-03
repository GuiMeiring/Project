import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/services/HttpService';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalAddClientsComponent } from '../modal-add-clients/modal-add-clients.component';
import { ModalClientComponent } from '../modal-client/modal-client.component';
export interface DialogDataClient {
  client : Array<any>;
  id: number;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  search: string ='';
  client : Array<any>= [];
add: any;


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.listaClients();
  }
  postClientModal(): void {
    const ref = this.dialog.open(ModalAddClientsComponent, {
      width: '600px',
    });
    ref.afterClosed().subscribe(result => {
      this.listaClients();
    })
  }
  public editClientModal(client: any, id: any) {
    const ref = this.dialog.open(ModalClientComponent, {
      width: '700px',
      data: {client: client, id : id}

    });
    ref.afterClosed().subscribe(result => {
      this.listaClients();
    })
    }
  async listaClients(){
    this.client= await this.httpService.get('client');


  }


}
