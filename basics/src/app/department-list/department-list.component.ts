import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "Mongo"},
    {"id": 2, "name": "Express"},
    {"id": 3, "name": "Angular"},
    {"id": 4, "name": "Node"}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }
}
