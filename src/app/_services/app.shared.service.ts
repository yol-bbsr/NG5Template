import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class AppSharedService {
	private isLoggedIn = new Subject<boolean>();
	private data = new Subject<any>();

	loggedIn$ = this.isLoggedIn.asObservable();
	setData$ = this.data.asObservable();

	// Service message commands
	changeState(state: boolean) {
		this.isLoggedIn.next(state);
	}
	
	updateDate(data: any){
		this.data.next(data);
	}
}