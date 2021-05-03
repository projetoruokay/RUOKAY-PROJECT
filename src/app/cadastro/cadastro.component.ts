import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  signin: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });s
  hide = true;
  get passwordInput() { return this.signin.get('password'); }


  data: Date ;
  nome
  rg
  email
  genero




  adicionar (nomeInput){
    console.log(nomeInput)
    this.nome = nomeInput.value;
  }


}
