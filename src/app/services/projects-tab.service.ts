import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsTabService {
  constructor() { }

  private activeTabSubject = new BehaviorSubject<string>(''); // Initial active tab is an empty string
  activeTab$: Observable<string> = this.activeTabSubject.asObservable();

  /**
   * Sets the active tab in the service
   * @param tab string
   */
  setActiveTab(tab: string) {
    this.activeTabSubject.next(tab);
  }
}
