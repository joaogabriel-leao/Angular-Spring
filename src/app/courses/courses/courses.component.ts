import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];
 // coursesService: CoursesService;

  constructor(private coursesService : CoursesService) { 
     // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
    .pipe(
        catchError(error => {
          console.log()
          return of([])
        })
    ); 
  }

  ngOnInit(): void {
  }

}
   