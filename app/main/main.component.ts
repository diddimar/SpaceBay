import { Component } from '@angular/core';
import { Router }   from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'main-component',
    templateUrl: './main.component.html'
})

export class MainComponent {

 constructor(
        private router : Router,
    ){}

    password: string = "";

    passwordCheck(){
        if(this.password == "admin"){
            this.router.navigate(['/admin']);
            this.password = "";
        }
         this.password = "";
    }

}