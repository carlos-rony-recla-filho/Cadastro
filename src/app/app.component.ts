import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  // imports:[NgxMaskDirective, NgxMaskPipe],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro-pessoas';
}
