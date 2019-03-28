import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  url = 'https://reqres.in/api/users'
  data: any;
  isCall = false;
  constructor(private http: HttpClient) {
  }
}
