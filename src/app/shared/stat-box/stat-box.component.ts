import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-stat-box',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './stat-box.component.html',
  styleUrl: './stat-box.component.scss'
})
export class StatBoxComponent {

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) value: number = 0;
  @Input({ required: true }) icon: string = '';


}
