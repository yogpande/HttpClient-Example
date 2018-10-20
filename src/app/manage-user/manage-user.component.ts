import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { State } from '../Models/state.model';
import { CommonService } from '../Services/common.service';
import { City } from '../Models/city.model';
import { CityService } from '../Services/city.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  providers: [CommonService,CityService]
})
export class ManageUserComponent implements OnInit {

  userForm:FormGroup;
  states: State[];
  cities: City[];
  constructor(private fb:FormBuilder,private cs: CommonService,private ct:CityService) { }

  LoadStates() {
    this.cs.GetStates().subscribe(data => {
      this.states = data;
    });
  }

  LoadCities(id:number) {    
    this.ct.getCitiesByState(id).subscribe(data => {
      this.cities = data;
    });
  }

  ngOnInit(): void
  {
    this.createForm();
    this.LoadStates();
  
  }
  
  createForm() {
    this.userForm = this.fb.group({
      uname: ['',Validators.required],
      uemail: ['',Validators.required],
      upass: ['',Validators.required],
      usid: [''],
      ucid: [''],
      isActive: ['']
    })
  }


}
