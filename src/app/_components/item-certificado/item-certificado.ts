import { Component } from '@angular/core';
import { SecundaryButton } from '../secundary-button/secundary-button';
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id: string = '6';

  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', this.id]);
    // this.router.navigateByUrl(`/certificados/${this.id}`); <-- outra forma de fazer, mas a de cima é uma boa prática
  }
}
