import { Component, ElementRef, ViewChild } from '@angular/core';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificado.service';
import {OnInit} from '@angular/core';
import { Certificado as ICertificado} from '../../interfaces/certificado';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-certificado',
  imports: [SecundaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {

  id: string | null = null;
  certificado: ICertificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(cert => cert.id === this.id);
    });

  }

  downloadCertificado() {

    if (this.certificado ==  undefined) {
      return;
    }

    html2canvas(this.certificadoElement.nativeElement, {scale: 2}).then(canvas => {
      const link = document.createElement('a');
      link.download = `certificado_${this.certificado?.nome.replaceAll(" ", "_")}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
}
