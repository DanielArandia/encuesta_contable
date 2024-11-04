import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa HttpClient
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HttpClientModule], // Añade HttpClientModule aquí
})
export class AppComponent {
  title = 'Asesoría Fiscal';
  selectedForm: string | null = null; // Estado para rastrear qué formulario se muestra

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  showForm(formName: string) {
    this.selectedForm = formName; // Actualiza el formulario seleccionado
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
    const formData = new FormData();
    const target = event.target as HTMLFormElement;
  
    // Selecciona todos los inputs de tipo file y convierte cada uno a HTMLInputElement
    const files = target.querySelectorAll('input[type="file"]');
    files.forEach((fileInput) => {
      const inputElement = fileInput as HTMLInputElement; // Casting a HTMLInputElement
      const file = inputElement.files?.[0]; // Ahora puedes acceder a .files
      if (file) {
        formData.append('files', file);
      }
    });
  
    // Enviar el FormData al backend
    this.http.post('http://192.168.100.2:3000/upload', formData, { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('Archivo subido correctamente:', response);
        alert('Formulario enviado y archivo subido!');
      },
      error: (error) => {
        console.error('Error al subir el archivo:', error);
        alert('Error al enviar el formulario.');
      }
    });
    
  }
  
}
