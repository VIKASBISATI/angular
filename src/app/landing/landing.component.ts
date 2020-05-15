import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public services: any;
  public serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a Test' }
  ];

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getServices().subscribe(res => {
      this.services = res;
      this.services = this.services.data.data;
    });
  }
  storeProductId(id) {
    localStorage.setItem('productId', id);
    this.router.navigate(['/signup']);
  }
}
