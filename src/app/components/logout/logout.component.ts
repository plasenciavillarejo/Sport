import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(
    private router:Router) {}

  ngOnInit(): void {
    this.router.navigate(['']);
  }

}
