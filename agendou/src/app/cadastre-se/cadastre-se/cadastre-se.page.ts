import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-cadastre-se',
  templateUrl: './cadastre-se.page.html',
  styleUrls: ['./cadastre-se.page.scss'],
})
export class CadastreSePage implements OnInit {

  constructor(
    private utils: UtilsService
  ) { }

  public login: boolean = false;


  ngOnInit() {
  }

  voltar() {
    this.utils.navegar('login');
  }

}
