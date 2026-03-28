import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { NavComponent } from './nav-component/nav-component';

@Component({
  selector: 'app-root',
  imports: [Home, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Kota-project');
}
