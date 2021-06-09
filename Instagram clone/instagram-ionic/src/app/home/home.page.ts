import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ProfilePage } from '../profile/profile.page';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data:any=[]
datas:any=[]
  constructor(private Service: ServiceService,public navCtrl: NavController, private router: Router) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    debugger

    this.Service.Data().subscribe((res) => {
    debugger
    this.data = res;
    this.datas= this.data.results;
    })
  }
  public toProfilePage(){
    debugger;
    this.router.navigateByUrl('/profile');
  }  
}
