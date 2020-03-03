import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  			<input [(ngModel)]="name" type="text">
  			{{name}}
  			`,
  styles: [`
  			.text-success{
  				color: green;
  			}
  			.text-fail{
  				color: red;
  			}
  		`]
})
export class TestComponent implements OnInit {
	public name = 'Vinayak';
	public textSuccess = 'text-success';
	public textFail = 'text-fail';
	public red = 'green';
	constructor() { }

  ngOnInit(): void {
  }

}
