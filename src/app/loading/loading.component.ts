import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  //load_value: boolean;

  @Input() child_load;

  constructor() { }

  ngOnInit(): void 
  {
    
  }

  ngOnDestroy(){

  }

  stop_loading()
  {
    //this.load_value = false;
  }

}
