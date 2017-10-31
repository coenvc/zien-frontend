import {Component, OnInit} from '@angular/core';
import {Blog} from 'models/Blog';
import {BlogDataservice} from '../../app/database/blog.dataservice';
import {UserDataservice} from '../../app/database/user.dataservice';
import {User} from '../../models/User';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blog: Blog = new Blog();
  private users: User[];

  constructor(private blogData: BlogDataservice,
              private userData: UserDataservice) {
    this.userData.getAll().subscribe(result => this.users = result);
  }

  ngOnInit() {
    // this.blogData.getBlogById(0).subscribe(request => this.blog = request);
  }

  getContent(source: any) {
    this.blog.content = source;
  }

  onSubmit() {
    this.blog.summary = this.blog.content;
    this.blog.content = null;

    console.log(JSON.stringify(this.blog));

    this.blogData.create(this.blog).subscribe(result => console.log(result));
  }
}
