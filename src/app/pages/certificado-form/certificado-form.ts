import { Component } from '@angular/core';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
}
