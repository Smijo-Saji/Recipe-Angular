import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css'],
})
export class SingleviewComponent implements OnInit {
  resData: any = '';
  constructor(private ar: ActivatedRoute, private service: ApiServiceService) {}

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.service.getAllRecipies().subscribe((result: any) => {
        this.resData = result.recipes.find((i: any) => i.id == data.id);
        console.log(this.resData);
      });
    });
  }
}
