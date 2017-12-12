import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GlobalValues } from '../_config/global.values';
import { environment } from './../../environments/environment';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }

  onActivate(event, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
