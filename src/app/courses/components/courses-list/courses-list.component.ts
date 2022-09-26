import { Component, EventEmitter, Input, OnInit, Output, ɵɵqueryRefresh } from '@angular/core';

import { Link } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Link[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'url','actions'];

  constructor() { }

  ngOnInit(): void {  }


  onAdd() {
    this.add.emit(true);
  }

  onEdit(link: Link) {
    console.log(link);
    this.edit.emit(link);
  }

  onDelete(link: Link) {
    this.remove.emit(link);
  }

}
