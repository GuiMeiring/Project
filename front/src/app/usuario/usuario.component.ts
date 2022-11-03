import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from 'src/services/HttpService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalEditUserComponent } from '../modal-edit-user/modal-edit-user.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

hide: any;
password: string ='';
username: string ='';
name: string ='';
cpassword: string ='';
user: Array<any>=[];


  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  editSenha() {
    const ref = this.dialog.open(ModalEditUserComponent, {
      width: '600px',
    });
    ref.afterClosed().subscribe(result => {
    })
    }
    cadastrar() {
      this.user= await this.httpService.post('user', { name: this.name,username: this.username, password: this.password, cpassword: this.cpassword});

    
    }

}
