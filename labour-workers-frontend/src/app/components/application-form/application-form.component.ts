import { Component } from '@angular/core';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
})
export class ApplicationFormComponent {
  application = { job: { id: null }, applicant: { id: null }, status: '' };

  constructor(private applicationService: ApplicationService) {}

  submit(): void {
    this.applicationService.applyForJob(this.application).subscribe(() => {
      alert('Application submitted');
    });
  }
}
