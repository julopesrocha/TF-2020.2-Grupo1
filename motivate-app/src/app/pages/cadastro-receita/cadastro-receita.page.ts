import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.page.html',
  styleUrls: ['./cadastro-receita.page.scss'],
})
export class CadastroReceitaPage implements OnInit {

  recipeForm: FormGroup;
  photo: SafeResourceUrl;

  constructor(public formbuilder: FormBuilder, private router: Router, private sanitizer:DomSanitizer) { 
    this.recipeForm = this.formbuilder.group({
      title:[null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      challenge:[null, [Validators.required]],
      subtitle:[null],
      ingredients:[null, [Validators.required, Validators.maxLength(500), Validators.minLength(3)]],
      preparation_mode: [null, [Validators.required, Validators.maxLength(600), Validators.minLength(3)]]
      

    }
      
    );
   }

   onSubmit(form){
     console.log(form.value);
   }

   

  ngOnInit() {
  }

  async takePicture(){
    const image = await
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo =
    this.sanitizer.bypassSecurityTrustResourceUrl
    (image && (image.dataUrl));
  }


}
