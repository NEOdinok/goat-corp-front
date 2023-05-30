import { makeAutoObservable } from 'mobx';

class menuDrawerStore {
	isMenuDrawerOpen: boolean = false;

	toggleMenuDrawerOpen(val: boolean) {
		this.isMenuDrawerOpen = val;
	}

	constructor() {
		makeAutoObservable(this);
	}
}

export default new menuDrawerStore();