import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals : any;
  

  constructor(private router : Router, private route :ActivatedRoute, private _data : DataService) { 
    // this.route.params.subscribe(res => console.log(res.id))
  }

  ngOnInit() {
    this._data.goal.subscribe( res => this.goals = res)
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
