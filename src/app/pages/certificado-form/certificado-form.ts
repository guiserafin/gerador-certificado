import { Component } from '@angular/core';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  atividade: string = '';

  certificado: Certificado = {
    nome: '',
    atividades: []
  };

  campoValido(control: NgModel){
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.trim().length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade.trim());
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {

    if (!this.formValido()) {
      return;
    }

    console.log(this.certificado);
  }
}
