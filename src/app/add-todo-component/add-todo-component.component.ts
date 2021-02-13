import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo-component',
  templateUrl: './add-todo-component.component.html',
  styleUrls: ['./add-todo-component.component.scss']
})
export class AddTodoComponentComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
    })
  }


  addTodo(){
    console.log(this.form.value);
  }

}
