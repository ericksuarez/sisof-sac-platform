import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../../../shared/services/dynamic-script-loader-service';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html'
})
export class SidebarNavigationComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.dynamicScriptLoader.loadGlobalApp().then(data => { console.log(data) }).catch(error => console.log(error));
  }

}
