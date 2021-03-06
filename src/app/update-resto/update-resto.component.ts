import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editResto=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
