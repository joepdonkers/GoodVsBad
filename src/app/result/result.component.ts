import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  jsonData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the JSON data from the route parameter
    this.route.queryParams.subscribe((params) => {
      this.jsonData = JSON.parse(params['data']);
    });
  }
}