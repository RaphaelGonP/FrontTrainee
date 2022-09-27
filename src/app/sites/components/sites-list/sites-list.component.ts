import { Component, EventEmitter, Input, OnInit, Output, ɵɵqueryRefresh } from '@angular/core';

import { Link } from '../../model/site';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss']
})
export class SitesListComponent implements OnInit {

  @Input() sites: Link[] = [];
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
