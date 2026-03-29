import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav-component/nav-component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ NavComponent, NgOptimizedImage, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Kota-project');
}
