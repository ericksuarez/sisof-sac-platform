import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../../../shared/services/dynamic-script-loader-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    //this.dynamicScriptLoader.loadGlobalApp().then(data => { console.log(data) }).catch(error => console.log(error));
  }

}
