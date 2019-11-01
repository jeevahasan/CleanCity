import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  formData: User;
  constructor() { }
}
