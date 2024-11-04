import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule], // Añade CommonModule aquí
})
export class AppComponent {
  title = 'Asesoría Fiscal';
  selectedForm: string | null = null; // Estado para rastrear qué formulario se muestra

  showForm(formName: string) {
    this.selectedForm = formName; // Actualiza el formulario seleccionado
  }

  // Función para manejar el envío de formularios (puedes personalizarlo más tarde)
  onSubmit(event: Event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    alert('Formulario enviado!'); // Aquí puedes implementar la lógica para manejar los archivos
  }
}
