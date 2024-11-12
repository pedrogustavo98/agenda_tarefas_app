import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private utils: UtilsService
  ) { }

  public login: boolean = false;


  ngOnInit() {
  }

  logar(){
    this.login = true;
  }

  voltar(){
    this.login = false;
  }

  acessar(){
    this.utils.navegar('cadastre-se');
  }
}
