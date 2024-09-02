import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormFieldComponent } from '../../additions/form-field/form-field.component';
import { LoaderComponent } from '../../additions/loader/loader.component';
import { getRandomPrompt } from '../../../shared/utils/random-prompt';
import {Apollo, MutationResult} from 'apollo-angular'
import { CREATE_POST, GENERATE_IMAGE } from '../../../Base/mutations/mutations';
interface GenImage{
  generateImage: string
}
@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldComponent, LoaderComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent implements OnInit {
  private _router = inject(Router);
  private _formBuilder = inject(FormBuilder);
  private _apollo = inject(Apollo);

  generateImgState:boolean = false;
  loadingState:boolean = false;
  postForm!:FormGroup;
  isSurpriseMe:boolean = true;
  photo!:any;
  

  ngOnInit(): void {
    this.postForm = this._formBuilder.group({
      name: [null,Validators.required, Validators.minLength(3)],
      prompt : [null, Validators.required, Validators.minLength(1)],
      photo: [null]

    })
    
    
  }

  generateImage():void {
    if(this.postForm.get('prompt')?.value) {
      this.generateImgState = true;
      this._apollo.mutate({
        mutation: GENERATE_IMAGE,
        variables: {
          prompt: this.postForm.get('prompt')?.value
        },
      }).subscribe(
       ({data}:MutationResult<any>) => {
        const imageData = data as {generateImage:string};
          
          this.photo = `data:image/jpeg;base64,`+imageData.generateImage
          this.generateImgState = false;
        },
      error => {
          console.log(error);
          this.generateImgState = false
          alert(error)
        }
      )


    } else {
      alert('Please enter a prompt')

    }

  }

  createPost():void {
    
    if(this.postForm.get('prompt')?.value && this.photo && this.postForm.get('name')?.value ){
      
      this.loadingState = true;
      try {
        
        this._apollo.mutate({
          mutation: CREATE_POST,
          variables:{
           
              name: this.postForm.get('name')?.value,
              prompt: this.postForm.get('prompt')?.value,
              photo: this.photo

            
          },
          refetchQueries: ['getPosts']
        }).subscribe( ({data})=> {
          this.loadingState = false;
          this._router.navigate(['/']);
    
        }, 
          error => {
            console.log(error);
            this.loadingState = false
            alert(error);
          } )
        
      } catch (error) {

        console.log(error);
        this.loadingState = false
        
      }
    } else {

      alert('Please enter a prompt and generate an image and name is required too')
    }




  }

  nameChange():void{
    
  }

  handleSurpriseMe():void{

    const randomPrompt = getRandomPrompt(this.postForm.get('prompt')?.value);
    this.postForm.patchValue({prompt: randomPrompt});
    
  }

  promptChange():void{

  }


}
