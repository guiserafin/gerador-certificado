import { Component, ViewChild } from '@angular/core';
import { SecundaryButton } from '../../_components/secundary-button/secundary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-certificado-form',
  imports: [SecundaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

  constructor(private certificadoService: CertificadoService) { }
  @ViewChild('form') form!: NgForm;

  atividade: string = '';

  certificado: Certificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: ''
  };

  campoValido(control: NgModel){
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.trim().length > 0;
  }

  adicionarAtividade() {

    if (this.atividade.trim().length === 0) {
      return;
    }

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

    this.certificado.id = uuidv4();
    this.certificado.dataEmissao = this.dataAtual();

    this.certificadoService.adicionarCertificado(this.certificado);

    this.certificado = this.estadoInicialCertificado();
    this.form.resetForm();
  }

  dataAtual(): string {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  estadoInicialCertificado() : Certificado {
    return {
      id: '',
      nome: '',
      atividades: [],
      dataEmissao: ''
    };
  }
}
