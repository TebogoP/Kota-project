import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new',
  imports: [],
  templateUrl: './add-new.html',
  styleUrl: './add-new.scss',
})
export class AddNew {
  route: ActivatedRoute = inject(ActivatedRoute);
}
