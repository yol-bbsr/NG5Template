import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  isOpen: boolean = false;
  currentUser = null;

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  constructor(private _elementRef: ElementRef,
              private router: Router,
              // private auth: AuthService
            ) {
    // this.currentUser = this.auth;
    this.currentUser = {};
    this.currentUser.currentUserName = 'Shiba Prasad Swain';
    this.currentUser.roleName = 'Web Admin';
    this.currentUser.projectName = 'Blend Integration (DITECH)';
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.router.navigate(['/login']);
  }

  showSettings() {
    this.router.navigate(['/settings']);
  }

  changeProject(){
    console.log('TODO: Change Project!');
  }
}
