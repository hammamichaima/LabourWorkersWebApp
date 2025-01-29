import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredJobs = [
    { title: 'Software Engineer', description: 'Develop cutting-edge software solutions.' },
    { title: 'Construction Worker', description: 'Join a leading construction firm.' },
    { title: 'Electrician', description: 'Provide electrical services for residential projects.' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
