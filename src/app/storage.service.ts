import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }
  getdata(key)
  {
    return localStorage.getItem(key);
  }

  setData(key, value) {
    return localStorage.setItem(key, value);
  }
}
