import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-desafio',
  templateUrl: './cadastro-desafio.page.html',
  styleUrls: ['./cadastro-desafio.page.scss'],
})
export class CadastroDesafioPage implements OnInit {

  challengeForm: FormGroup;
  photo: SafeResourceUrl;

  constructor(private router: Router, public formbuilder: FormBuilder, private sanitizer: DomSanitizer) { 

    this.challengeForm = this.formbuilder.group({
      title:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      description:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      about:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      recomendation:[null, [Validators.maxLength(500)]],

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
