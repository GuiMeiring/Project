import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from 'src/services/HttpService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalEditUserComponent } from '../modal-edit-user/modal-edit-user.component';

export interface DialogDataUser {
  user:Array<any>;
  id: number;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  users : Array<any> = [];
  user : string = "";
  name : string = "";
  username : string = "";
  password : string = "";
  cpassword : string = "";
  constructor(private httpService : HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.get()
  }

  async get(){
    this.users = await this.httpService.get('user')
  }
  async postUser(){
    this.users = await this.httpService.post('user', {name : this.name, username : this.username,
    password : this.password, cpassword : this.cpassword})
    this.clear();
    this.ngOnInit()
  }
  clear(){
    this.name = "";
    this.username = "";
    this.password = "";
    this.cpassword = "";
  }
  openModal1(user : any, id: any): void {
    const ref = this.dialog.open(ModalEditUserComponent, {
      width: '600px',
      data: {user: user, id: id}
    });
    ref.afterClosed().subscribe(result => {
      this.get();
    })
  }
  
  openModal2(user : any, id: any): void {
    const ref = this.dialog.open(ModalEditUserComponent, {
      width: '600px',
      data: {user: user, id: id}
    });
    ref.afterClosed().subscribe(result => {
      this.get();
    })
    
  }

}
