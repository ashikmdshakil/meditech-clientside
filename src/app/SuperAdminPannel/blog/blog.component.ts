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
//  user: User = new User();
  blogs: Blog[] = [];
  message: string;
  superAdminService: SuperAdminService;
  domSanitizer: DomSanitizer;

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
   }

  ngOnInit(): void {
    this.superAdminService.getBlogs().subscribe(result =>{
      console.log(result);
      this.blogs = result;
      this.blogs.forEach(blog => {
        blog.youtubeAddress = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+blog.youtubeLink.slice(16)); 
      });
    })
  }

  postBlog(){
    let blogger = new User();
    blogger.userId = Number(localStorage.getItem("userId"));
    this.blog.blogger = blogger;
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

  remove(id: number){
      let blog : Blog = new Blog();
      this.blogs.forEach(blogL => {
        if(blogL.id === id){
          blog = blogL;
          this.superAdminService.removeBlog(blog).subscribe(result =>{
            if(result === "success"){
              this.message = "You removed the blog successfully!";
            }
            else{
              this.message = "Sorry! Something went wrong."
            }
          },
          error =>{
            this.message = "Sorry! Something went wrong. It might be a connection error."
          }
          )
        }
      });
  }

}
