import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class LoadService {

  _loading: boolean;

  constructor()
  {
    this._loading = true;
   }

   start_loading(){

   }

   stop_loading()
   {
     this._loading = false;
   }
}
