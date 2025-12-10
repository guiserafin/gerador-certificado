import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundary-button',
  imports: [CommonModule],
  templateUrl: './secundary-button.html',
  styleUrl: './secundary-button.css'
})
export class SecundaryButton {
  @Input() textoBotao: string = '';
  @Input() phClass: string = 'ph ph-plus';
  @Input() disabled: boolean = false;
}
