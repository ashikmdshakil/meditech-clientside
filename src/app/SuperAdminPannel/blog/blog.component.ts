import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User.model';
import { Blog } from 'src/app/Model/Blog.model'
import { BlogCategory } from 'src/app/Model/BlogCategory.model'
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
  message1: string;
  message2: string;
  message3: string;
  superAdminService: SuperAdminService;
  domSanitizer: DomSanitizer;
  blogCategories: BlogCategory[] = [];
  blogCategory: BlogCategory = new BlogCategory();
  selectedCategory: BlogCategory = new BlogCategory();
  selectedCategoryToRemove: BlogCategory = new BlogCategory();

  constructor(superAdminService: SuperAdminService, domSanitizer: DomSanitizer) {
    this.superAdminService = superAdminService;
    this.domSanitizer = domSanitizer;
   }

  ngOnInit(): void {
    this.superAdminService.getBlogs().subscribe(result =>{
      this.blogs = result;
      this.blogs.forEach(blog => {
        blog.youtubeAddress = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+blog.youtubeLink.slice(16)); 
      });
    })

    this.superAdminService.getBlogCategories().subscribe(result =>{
        this.blogCategories = result;
    })

  }

  postBlog(){
    let blogger = new User();
    blogger.userId = Number(localStorage.getItem("userId"));
    this.blog.blogger = blogger;
    this.blog.blogCategory = this.selectedCategory;
    this.superAdminService.postBlog(this.blog).subscribe(result =>{
      if(result === 'success'){
        this.message1 = "This blog is posted successfully !";
      }
      else{
        this.message1 = "Sorry ! Something went wrong."
      }
    },
    error =>{
      this.message1 = "Sorry! Something went wrong. It might be a connection error."
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

  createBlogCategory(){
    this.superAdminService.createBlogCategory(this.blogCategory).subscribe(result =>{
      if(result === "success"){
        this.message2 = "Blog category is successfully created.";
        this.blogCategory.name = "";
      }
      else{
        this.message2 = "Sorry! Something went wrong.";
      }
    },
    error =>{
      this.message2 = "Sorry! Something went wrong. It might be a connection error.";
    }
    )
  }

  selectCategory(id: number){
    this.blogCategories.forEach(element => {
      if(element.id == id){
        this.selectedCategory = element;
      }
    });
  }

  selectCategoryToRemove(id: number){
    this.blogCategories.forEach(element => {
      if(element.id == id){
        this.selectedCategoryToRemove = element;
      }
    });
  }

  removeCategory(id: number){
    this.blogCategories.forEach(element => {
      if(element.id == id){
        this.superAdminService.removeBlogCategory(element).subscribe(result =>{
          if(result == "success"){
            this.message3 = "This Category is successfully removed.";
          }
          else{
            this.message3 = "Sorry! Something went wrong.";
          }   
        },
        error =>{
          this.message3 = "Sorry! Something went wrong. It might be a connection error.";
        }
        )
      }
    });
  }

}
