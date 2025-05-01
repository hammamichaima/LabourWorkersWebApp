import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', this.userId);

    // Tu peux maintenant appeler un service pour charger les infos utilisateur :
    // this.userService.getUserById(this.userId).subscribe(...)
  }
}
