import { Component, OnInit } from '@angular/core';
import { State } from '../Models/state.model';
import { CommonService } from '../Services/common.service';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { retry, retryWhen } from 'rxjs/operators';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.css'],
  providers: [CommonService]
})
export class ManageStateComponent implements OnInit {


  title = 'app';
  states: State[];
  state: State = new State();

  constructor(private cs: CommonService, private ns: NotifierService) {

  }

  editState(stateinfo: State) {
    this.state = stateinfo;
  }


  LoadStates() {
    //for promise
    // this.cs.GetStatesByPromise().then(a=>{
    //   this.states = a;
    // });

    //for observable
    this.cs.GetStates().pipe(retry(3)).subscribe(data => {this.states = data;});
  }

  ngOnInit() {
    this.LoadStates();
  }

  SaveData(form: NgForm) {
    if (form.valid) {

      if (this.state.stateid > 0) {
        this.cs.UpdateState(this.state.stateid, this.state).subscribe(data => {
          if (data == "error") {
            this.ns.notify('error', 'Please try again after sometime!');

          }
          else {
            this.ns.notify('success', 'state information updated.');
            this.LoadStates();
          }
        });
      }
      else {

        this.cs.AddState(this.state).subscribe(data => {
          if (data == "error") {
            this.ns.notify('error', 'Please try again after sometime!');
          }
          else {
            this.ns.notify('success', 'state information saved.');
            this.LoadStates();
          }
        });
      }
    }

  }

  deleteState(id: number) {
    var op = confirm('Are you sure want to delete?');

    if (op) {
      this.cs.DeleteState(id).subscribe(data => {
        this.ns.notify('success', 'state information deleted.');
        this.LoadStates();
      });
    }

  }

}
