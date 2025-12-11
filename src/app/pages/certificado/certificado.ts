import { Component } from '@angular/core';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificado.service';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-certificado',
  imports: [SecundaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  constructor(private certificadoService: CertificadoService) { }

  ngOnInit() {
    console.log(this.certificadoService.certificados);
  }
}
