import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input, OnChanges, PLATFORM_ID, Inject } from '@angular/core';
import MetisMenu from 'metismenujs';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [SimplebarAngularModule, CommonModule, TranslateModule,RouterModule]
})

/**
 * Sidebar component
 */
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('componentRef') scrollRef!: ElementRef<HTMLElement>;
  @Input() isCondensed = false;
  menu: any;
  data: any;

  menuItems: MenuItem[] = [];

  @ViewChild('sideMenu') sideMenu!: ElementRef;

  constructor(private eventService: EventService, private router: Router, public translate: TranslateService, private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
        this._scrollElement();
      }
    });
  }

  ngOnInit() {
    this.initialize();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this._scrollElement();
      this.menu = new MetisMenu(this.sideMenu.nativeElement);
      this._activateMenuDropdown();
    }
  }

  toggleMenu(event: any) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }

  ngOnChanges() {
    if (!this.isCondensed && this.sideMenu || this.isCondensed) {
      setTimeout(() => {
        if (isPlatformBrowser(this.platformId)) {
          this.menu = new MetisMenu(this.sideMenu.nativeElement);
        }
      },3000);
    } else if (this.menu) {
      this.menu.dispose();
    }
  }
  _scrollElement() {
    setTimeout(() => {
      const activeElements = document.getElementsByClassName("mm-active") as HTMLCollectionOf<HTMLElement>;

      if (activeElements.length > 0) {
        const currentPosition = activeElements[0].offsetTop;

        if (currentPosition > 500) {
          const scrollElement = this.scrollRef.nativeElement; // Access the native element here
          scrollElement.scrollTop = currentPosition + 300;
        }
      }
    }, 3000);
  }
  /**
   * remove active and mm-active class
   */
  _removeAllClass(className: string) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Activate the parent dropdown
   */
  _activateMenuDropdown() {
    this._removeAllClass('mm-active');
    this._removeAllClass('mm-show');
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    const paths = [];
    for (let i = 0; i < links.length; i++) {
      const link = links[i] as HTMLAnchorElement;
      paths.push(link.pathname); // Access pathname
    }
    var itemIndex = paths.indexOf(window.location.pathname);
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf('/');
      const item = window.location.pathname.substr(0, strIndex).toString();
      menuItemEl = links[paths.indexOf(item)];
    } else {
      menuItemEl = links[itemIndex];
    }
    if (menuItemEl) {
      menuItemEl.classList.add('active');
      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('mm-active');
        const parent2El = parentEl.parentElement?.closest('ul');
        if (parent2El && parent2El.id !== 'side-menu') {
          parent2El.classList.add('mm-show');
          const parent3El = parent2El.parentElement;
          if (parent3El && parent3El.id !== 'side-menu') {
            parent3El.classList.add('mm-active');
            const childAnchor = parent3El.querySelector('.has-arrow');
            const childDropdown = parent3El.querySelector('.has-dropdown');
            if (childAnchor) { childAnchor.classList.add('mm-active'); }
            if (childDropdown) { childDropdown.classList.add('mm-active'); }
            const parent4El = parent3El.parentElement;
            if (parent4El && parent4El.id !== 'side-menu') {
              parent4El.classList.add('mm-show');
              const parent5El = parent4El.parentElement;
              if (parent5El && parent5El.id !== 'side-menu') {
                parent5El.classList.add('mm-active');
                const childanchor = parent5El.querySelector('.is-parent');
                if (childanchor && parent5El.id !== 'side-menu') { childanchor.classList.add('mm-active'); }
              }
            }
          }
        }
      }
    }

  }

  /**
   * Initialize
   */
  initialize(): void {
    this.menuItems = MENU;
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
}
