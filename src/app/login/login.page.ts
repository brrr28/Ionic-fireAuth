import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private router:Router, private auth: AngularFireAuth ) { }

  ngOnInit() {
  }

  async login(): Promise<void>{
    const user = await this.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
    
    if(user.user.email) {
      this.router.navigate(['/home']);
    } else {
      alert('Login Failed!');
    }
  }

  async register(): Promise<void>{
    const user = await this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);

    if(user.user.email) {
      alert('Registration successful!')
    } else {
      alert('Registration failed')
    }
  }

}
