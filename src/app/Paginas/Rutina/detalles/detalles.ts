import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-detalles',
  imports: [ReactiveFormsModule],
  templateUrl: './detalles.html',
  styleUrl: './detalles.css',
})
export class Detalles {
  private readonly route = inject(ActivatedRoute)
  private readonly id = this.route.snapshot.paramMap.get("id");


}
