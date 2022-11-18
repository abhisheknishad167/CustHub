import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input() name='';
  @Input() Id='';
  @Input() country='';
  @Input() date='';





  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }

  

}
