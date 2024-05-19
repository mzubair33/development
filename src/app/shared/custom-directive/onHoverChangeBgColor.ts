import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlightColor]' // declare selector for directive
})
export class HighlightDirective {
    @Input('highlightColor') highlightColor: string = ''; // declare input for directive

    constructor(private el: ElementRef) { // ElementRef is used to access the host element on which we have applied our custom directive

    }
    @HostListener('mouseenter') onMouseEnter() { // HostListener is used to listen to events on the host element
        this.highlight(this.highlightColor = 'greenyellow');
    }


    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    highlight(color: string) { // highlight function
        this.el.nativeElement.style.backgroundColor = color; // set background color
    }
}
