import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router
  ) { }


  navegar(pagina: any) {
    this.router.navigate(['/'+pagina]);
  }
}
