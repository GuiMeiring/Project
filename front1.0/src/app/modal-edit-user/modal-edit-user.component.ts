import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/HttpService';

export interface DialogDataUser {
  user:Array<any>;
  id: number;
}

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.scss']
})
export class ModalEditUserComponent implements OnInit {
hide: any;
password: string='';
cpassword: string='';
user: Array<any>=[];

  constructor(public dialogRef: MatDialogRef<ModalEditUserComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) private data : DialogDataUser) { }

  ngOnInit(): void {
  }
  async editSenha() {
    console.log(this.data.user);
    this.user= await this.httpService.patch(`user/${this.data.id}`,{password: this.password, cpassword: this.cpassword});
    }


}
