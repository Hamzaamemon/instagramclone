import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
profile:any;
username:any;
email:any;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      debugger;
      this.profile = params['ProfileImage'];
      this.username = params['name'];
      this.email = params['email'];
    })
  }

}
