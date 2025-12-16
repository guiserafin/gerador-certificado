import { Component } from '@angular/core';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificado.service';
import {OnInit} from '@angular/core';
import { Certificado as ICertificado} from '../../interfaces/certificado';
@Component({
  selector: 'app-certificado',
  imports: [SecundaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {

  id: string | null = null;
  certificado: ICertificado | undefined;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(cert => cert.id === this.id);
    });

  }
}
