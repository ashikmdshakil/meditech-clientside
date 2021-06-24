import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { Blog } from 'src/app/Model/Blog.model'
import { SuperAdminService } from '../super-admin.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: Blog = new Blog();
  user: User = new User();
  message: string;
  superAdminService: SuperAdminService;
  domSanitizer: DomSanitizer;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
   }

  ngOnInit(): void {
  }

  postBlog(){
    this.superAdminService.postBlog(this.blog).subscribe(result =>{
      if(result === 'success'){
        this.message = "This blog is posted successfully !";
      }
      else{
        this.message = "Sorry ! Something went wrong."
      }
    },
    error =>{
      this.message = "Sorry! Something went wrong. It might be a connection error."
    }
    )
  }

}
