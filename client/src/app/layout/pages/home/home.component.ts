import { ChangeDetectorRef, Component, DoCheck, inject, OnDestroy, OnInit } from '@angular/core';
import { LoaderComponent } from '../../additions/loader/loader.component';
import { CardComponent } from '../../additions/card/card.component';
import { FormFieldComponent } from '../../additions/form-field/form-field.component';
import { CardsComponent } from '../../additions/cards/cards.component';
import { Apollo } from 'apollo-angular';
import {  Subscription } from 'rxjs';
import { GET_POSTS } from '../../../Base/queries/queries';
import { Post } from '../../../shared/interface/post';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoaderComponent, CardComponent, FormFieldComponent, CardsComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  




  loading: boolean = false;
  posts!:Post[];
  searchResults:Post[] = [];
  searchText:string = '';
  private _apollo = inject(Apollo);
   private _changeDetectorRef = inject(ChangeDetectorRef)
  private querySubscription!: Subscription;




  ngOnInit(): void {
      this.getPosts();
  }

  OnDestroy(): void {
   
      this.querySubscription.unsubscribe();
    
  }


  getPosts() {
    this.loading = true;
    this.querySubscription = this._apollo.watchQuery<any>({
      query: GET_POSTS,
      fetchPolicy: 'network-only'
    }).valueChanges.subscribe({
      next: ({data, loading}) =>{
        this.posts = data.getPosts as Post[];
        this.loading = false;

        this._changeDetectorRef.detectChanges();

        

      }, 
      error: (error) => {
        console.log(error)
        this.loading = false;
      }
    })
   

  }

  searchPosts(event:any) {
    this.searchText = event.target.value;
    console.log(this.searchText)

    const searchResult = this.posts.filter(post=> post.name?.toLocaleLowerCase().includes(this.searchText.toLowerCase()) || post.prompt?.toLocaleLowerCase().includes(this.searchText.toLowerCase()) );
    this.searchResults = searchResult;
    
  }

}
