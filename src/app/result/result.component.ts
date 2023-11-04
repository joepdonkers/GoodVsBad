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

  determineDiabetesText(certainty: number): string {
    if (certainty < 0.60) {
      return 'we are unsure if you have diabetes or not';
    } else if (certainty < 0.80) {
      return 'we are not very certain that you have diabetes or not, but we think that';
    } else if (certainty < 0.95) {
      return 'we are almost certain that';
    } else {
      return 'we are very certain that';
    }
  }
  ngOnInit() {
    // Retrieve the JSON data from the route parameter
    this.route.queryParams.subscribe((params) => {
      this.jsonData = JSON.parse(params['data']);
    });
  }
}