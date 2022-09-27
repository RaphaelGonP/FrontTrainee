import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Link } from '../../model/site';
import { SitesService } from '../../services/sites.service';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {

  constructor(
    private service: SitesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    //this.form
  }

  link: Link={
      'id': 0,
      'nome': '',
      'url': ''
  }

  ngOnInit(): void {
    this.link = this.route.snapshot.data['link'];
  }

  onSubmit(form: any){

    if(form.form.status === "INVALID"){
      this.onError();
      return;
    }
    else if(this.link.id){
      this.service.update(this.link.id, form.form.value).subscribe({
        next: () => {
          this.onEdit();
        }
      })
    }
    else{
      this.service.create(form.form.value).subscribe({
        next:(result) => {
          this.onSuccess();
        }
      })
    }

  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Link salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar link.', '', { duration: 5000 });
  }

  private onEdit() {
    this.snackBar.open('Link editado com sucessso.', '', { duration: 5000 });
    this.onCancel();
  }
}
