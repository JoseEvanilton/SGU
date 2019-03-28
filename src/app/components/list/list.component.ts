import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/assets/services/users/users.service';
import { HttpClient } from '@angular/common/http';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  url = 'https://reqres.in/api/users'
  data:  any;
  teste: string;
  loading = false;
  constructor(
    ) {

   }

  ngOnInit() {
  }
}
