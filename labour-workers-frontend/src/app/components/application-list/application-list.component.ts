import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
})
export class ApplicationListComponent implements OnInit {
  applications: any[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    this.applicationService.getAllApplications().subscribe((data) => {
      this.applications = data;
    });
  }
}
