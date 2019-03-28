import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/assets/services/users/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  cols = [];
  data = [];
  listTable: any;
  userForm: FormGroup;
  isNewCall = false;
  isEdit = false;
  itemSelect: any

  url = 'https://reqres.in/api/users';
  constructor(private usersService: UsersService, private http: HttpClient, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getUser();
    this.buildForm();
  }
  format(item) {
    if (item) {

    }
  }
  buildForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  initTable() {
    this.cols = [
      { field: 'first_name', header: 'Nome' },
      { field: 'last_name', header: 'Sobrenome' },
      { field: 'avatar', header: '' },
    ];
  }

  getUser() {
    if (this.isNewCall) {
      return
    }
    this.http.get(this.url + '?page=1&per_page=12').subscribe(result => {
      if (result) {
        this.isNewCall = true;
        this.listTable = result;
        this.data = result['data'];
        this.initTable();
      }
    });
  }

  postUser() {
    const dataAux = this.data
    const item = {
      id: dataAux.length + 1,
      first_name: this.userForm.controls['firstName'].value,
      last_name: this.userForm.controls['lastName'].value,
      avatar: '../../../../assets/img/default.png'
    }
    dataAux.push(item);
    this.data = dataAux;
    this.buildForm();
  }
  putList(item) {
    this.itemSelect = item;
    this.buildForm();
    this.isEdit = true;
    this.userForm.controls['firstName'].setValue(item.first_name);
    this.userForm.controls['lastName'].setValue(item.last_name);
  }
  salve() {
    this.data.forEach(element => {
      if (element.id === this.itemSelect.id) {
        element.first_name = this.userForm.controls['firstName'].value,
        element.last_name = this.userForm.controls['lastName'].value
      }
    });
    this.buildForm();
  }
  delete(item) {
    this.data.forEach((element, index) => {
      if (element.id === item.id) {
        this.data.splice(index, 1);
      }
    });
  }
  cancel() {
    this.buildForm();
    this.isEdit = false;
  }
}
