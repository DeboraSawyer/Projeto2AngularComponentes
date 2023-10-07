import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Injetar o roteador
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log();
  }

  onSubmit() {
    console.log("asdf");
  }
}