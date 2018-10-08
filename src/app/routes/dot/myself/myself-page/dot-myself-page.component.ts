import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { DotService } from './../../dot.service';
import { Card } from './../../../../domain/card';
import { ListAnimation } from './../../../../modules/animations/list.animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'dot-myself-page',
  templateUrl: './dot-myself-page.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [ ListAnimation ],
})

export class DotMyselfPageComponent implements OnInit {
  public cards: Observable<Card[]>;
  
  constructor(
    public authenticationService: AuthenticationService,
    public dotService: DotService) { }

  ngOnInit(): void {
    this.cards = this.dotService.get();
  }
}
