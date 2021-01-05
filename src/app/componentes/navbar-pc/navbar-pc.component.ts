import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-navbar-pc',
  templateUrl: './navbar-pc.component.html',
  styleUrls: ['./navbar-pc.component.scss'],
  animations: [
    trigger('navBarTrigger', [
      state('extend', style({
        background: '#fff',
      })),
      state('short', style({
        background: 'none',
      })),
      transition('extend <=> short', [
        animate(200),
      ]),
    ]),
    trigger('logoTrigger', [
      state('extend', style({
        opacity: '1',
      })),
      state('short', style({
        opacity: '0',
      })),
      transition('extend <=> short', [
        animate(100),
      ]),
    ]),
    trigger('linksTrigger', [
      state('extend', style({
        transform: 'translateY(50%)',
        background: '#fff',
      })),
      state('short', style({
        transform: 'translateY(0)',
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(35,84,152,1) 20%)',
      })),
      transition('extend <=> short', [
        animate(100),
      ]),
    ]),
    trigger('aLinksTrigger', [
      state('extend', style({
        color: '#000',
      })),
      state('short', style({
      })),
      transition('extend <=> short', [
        animate(150),
      ]),
    ]),
  ]
})
export class NavbarPcComponent implements OnInit {
  estadoBarra: boolean = false;
  extendLinksHTML: Element;
  extendNavbarHTML: Element;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    this.extendLinksHTML = document.getElementsByClassName('links')[0];
    this.extendNavbarHTML = document.getElementsByClassName('navbar')[0];
  }

  scroll = (event): void => {
    if (window.scrollY >= 100 && this.estadoBarra == false) {
      this.estadoBarra = true;
      this.extendLinksHTML.classList.add('links-extend');
      this.extendNavbarHTML.setAttribute("style", "border-bottom: solid 1px  rgb(253,145,0.9);");
    }else if(window.scrollY == 0 && this.estadoBarra == true){
      this.estadoBarra = false;
      this.extendLinksHTML.classList.remove('links-extend');
      this.extendNavbarHTML.removeAttribute('style');
    }
  };
}