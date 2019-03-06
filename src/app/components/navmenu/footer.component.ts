import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styles: []
})
export class FooterComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    getYear() {
        return new Date().getFullYear();
    }
}