import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';
import { Card } from './../../../../domain/card';
import { ListAnimation } from './../../../../modules/animations/list.animation';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

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
    public dotService: HttpService<Card>) { }

  ngOnInit(): void {
    this.cards = this.dotService.list('cards');
  }
}
