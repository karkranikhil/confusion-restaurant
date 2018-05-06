import { Component, OnInit,Inject,Input, ViewEncapsulation } from '@angular/core';
//import { DatePipe } from '@angular/common';
import{Params, ActivatedRoute} from '@angular/router';
import {Dish} from '../shared/dish';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DishService} from '../services/dish.service';
import {Location} from '@angular/common';
import {Comment} from '../shared/comment';
import 'rxjs/add/operator/switchMap';
import {visibility, flyInOut, expand} from '../animations/app.animations'
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  //@Input() dish = Dish;
  dish : Dish;
  dishcopy = null;
  dishIds:number[];
  prev:number;
  next:number;
  comment:Comment;
  commentsForm:FormGroup;
  errMess:string;
  visibility='shown'
  validationMessages = {
    'author': {
      'required':      'Author is required.',
      'minlength':     'Author must be at least 2 characters long.'
    },
    'comment': {
      'required':      'comments is required.',
    }
  };
  constructor(private dishservice:DishService,
  private route: ActivatedRoute,
  private location:Location,
  private cmt: FormBuilder,
@Inject('BaseURL') private BaseURL) {
    this.createForm();
   }
  formErrors={
    'author':'',
    'rating':'',
    'comment':''
  };
  createForm() {
    this.commentsForm = this.cmt.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: ['5', [] ],
      comment: ['', [Validators.required]],
      
    });
    this.commentsForm.valueChanges
    .subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();// reset form validation messages
  
  }
  onValueChanged(data?:any){
    if(!this.commentsForm){
      return;
    }
    const form= this.commentsForm;
    for(const field in this.formErrors){
      this.formErrors[field]='';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages= this.validationMessages[field];
        for (const key in control.errors){
          this.formErrors[field]+=messages[key]+' ';
        }
      }
    }
  }
  onSubmit() {
    this.comment = this.commentsForm.value;
    this.comment.date = new Date().toISOString();
    this.dishcopy.comments.push(this.comment);
    console.log('this.dishcopy',this.dishcopy)
    this.dishcopy.save().
    subscribe(dish=>this.dish = dish);
    this.commentsForm.reset({
      author: '',
      comment: '',
      rating: '5'
    });
  }
  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds=>this.dishIds=dishIds)
    this.route.params.switchMap((params:Params)=>{
      this.visibility = 'hidden';
      return this.dishservice.getDish(+params['id']);
    })
    .subscribe(dish =>{
      console.log(dish)
      this.dish = dish;
      this.dishcopy = dish;
      this.setPrevNext(dish.id);
      this.visibility = 'shown'
    },errmess=>this.errMess= <any>errmess);
  }

  setPrevNext(dishId:number){
    let index=this.dishIds.indexOf(dishId);
    this.prev=this.dishIds[(this.dishIds.length + index-1)%this.dishIds.length]
    this.next=this.dishIds[(this.dishIds.length + index+1)%this.dishIds.length]
  }
  goBack():void{
    this.location.back();
  }
}
