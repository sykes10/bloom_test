import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
