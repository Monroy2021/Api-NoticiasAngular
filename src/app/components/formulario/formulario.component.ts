import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSelecionada = 'general';
  paisSeleccionado = 'ar';

  categoria: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ]
  paises: any[] = [
    { value: 'co', nombre: 'Colombia' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' }, 
    { value: 'ar', nombre: 'Argentina' },
    { value: 'gb', nombre: 'Reino Unido' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSelecionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
