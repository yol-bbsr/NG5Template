import { Injectable } from '@angular/core';
import { SidenavItem } from './item/item.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SidenavService {

  private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _items: SidenavItem[] = [];
  items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();

  private _currentlyOpenSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _currentlyOpen: SidenavItem[] = [];
  currentlyOpen$: Observable<SidenavItem[]> = this._currentlyOpenSubject.asObservable();

  constructor() {
    const home = this.addItem('Home', 'home', '/home', 1);

    const requirementAnalysis = this.addItem('Requirement Analysis', 'dna', null, 2);
    this.addSubItem(requirementAnalysis, 'Little\'s Law', '/requirementanalysis/littleslaw', 1);
    this.addSubItem(requirementAnalysis, 'Record Scenario', '/requirementanalysis/recordscenario', 2);
    this.addSubItem(requirementAnalysis, 'Workload Simulation', '/requirementanalysis/workloadsimulation', 3);

    const resultAnalysis = this.addItem('Result Analysis', 'flask', '/resultanalysis', 8);
    const reports = this.addItem('Reports', 'file-chart', '/reports', 9);
  }

  addItem(name: string, icon: string, route: any, position: number, badge?: string, badgeColor?: string, customClass?: string) {
    const item = new SidenavItem({
      name: name,
      icon: icon,
      route: route,
      subItems: [],
      position: position || 99,
      badge: badge || null,
      badgeColor: badgeColor || null,
      customClass: customClass || null
    });

    this._items.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  addSubItem(parent: SidenavItem, name: string, route: any, position: number) {
    const item = new SidenavItem({
      name: name,
      route: route,
      parent: parent,
      subItems: [],
      position: position || 99
    });

    parent.subItems.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  removeItem(item: SidenavItem) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }

    this._itemsSubject.next(this._items);
  }

  isOpen(item: SidenavItem) {
    return (this._currentlyOpen.indexOf(item) !== -1);
  }

  toggleCurrentlyOpen(item: SidenavItem) {
    let currentlyOpen = this._currentlyOpen;
    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this._currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getAllParents(item);
    }

    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  getAllParents(item: SidenavItem, currentlyOpen: SidenavItem[] = []) {
    currentlyOpen.unshift(item);

    if (item.hasParent()) {
      return this.getAllParents(item.parent, currentlyOpen);
    } else {
      return currentlyOpen;
    }
  }

  nextCurrentlyOpen(currentlyOpen: SidenavItem[]) {
    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  nextCurrentlyOpenByRoute(route: string) {
    const currentlyOpen = [];

    const item = this.findByRouteRecursive(route, this._items);

    // if (item && item.hasParent()) {
    //   currentlyOpen = this.getAllParents(item);
    // } else if (item) {
    //   currentlyOpen = [item];
    // }
    //
    // this.nextCurrentlyOpen(currentlyOpen);
  }

  findByRouteRecursive(route: string, collection: SidenavItem[]) {
    let result = collection.filter((item) => {
      if (item.route === route) {
        return item;
      }
    });


    if (!result) {
      collection.forEach((item) => {
        if (item.hasSubItems()) {
          const found = this.findByRouteRecursive(route, item.subItems);

          if (found) {
            result = found;
            return false;
          }
        }
      });
    }

    return result;
  }

  get currentlyOpen() {
    return this._currentlyOpen;
  }

  getSidenavItemByRoute(route) {
    return this.findByRouteRecursive(route, this._items);
  }

}
