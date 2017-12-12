import { Component, OnInit, Input } from '@angular/core';
import * as screenfull from 'screenfull';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav;

  isFullscreen: boolean = false;
  showLoading: boolean;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });
  }

  ngOnInit() {
  }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }

  goHome(){
    this.router.navigate(['/home']);
  }

}
