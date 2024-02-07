import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @ViewChild('container')
  container!: ElementRef;

  user = {
    username: '',
    email: '',
    password: ''
  };

  signIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  onSubmit() {
    alert(`User registered:\nUsername: ${this.user.username}\nEmail: ${this.user.email}`);
  }
  
}
