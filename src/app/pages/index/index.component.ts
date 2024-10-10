import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  @ViewChild('botones', { static: true }) botonesContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    if (this.botonesContainer) {
      // Crear el botón CV y agregarlo al contenedor
      const botonCV = this.crearBoton("Ver CV", "boton1");
      this.renderer.appendChild(this.botonesContainer.nativeElement, botonCV);
  
      // Agregar evento click para abrir el enlace
      this.renderer.listen(botonCV, 'click', () => {
        window.open('https://drive.google.com/file/d/1bwxZVZyiJWxRK9gjVEi2qxanEvs2JQCs/view', '_blank');
      });
  
      // Crear el botón Contacto y agregarlo al contenedor
      const botonContacto = this.crearBoton("Contacto", "boton2");
      this.renderer.appendChild(this.botonesContainer.nativeElement, botonContacto);
  
      // Agregar evento click al botón de Contacto
      this.renderer.listen(botonContacto, 'click', () => {
        window.open('index2.html', '_blank');
      });
    } else {
      console.error('El contenedor de botones no está disponible.');
    }
  }
  
  crearBoton(nombre: string, id: string): HTMLElement {
    const boton = this.renderer.createElement('button');
    const texto = this.renderer.createText(nombre);
    this.renderer.appendChild(boton, texto);
    this.renderer.setAttribute(boton, 'id', id);
    
    // Aplicar clase CSS si es necesario
    this.renderer.addClass(boton, 'botones');
    
    return boton;
  } 
}
