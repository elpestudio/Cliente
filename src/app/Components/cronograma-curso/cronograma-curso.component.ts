import { Component } from '@angular/core';
import { CronogramaCursoService } from 'src/app/Services/cronograma-curso.service';

declare var window: any;

@Component({
  selector: 'app-cronograma-curso',
  templateUrl: './cronograma-curso.component.html',
  styleUrls: ['./cronograma-curso.component.scss']
})


export class CronogramaCursoComponent {
  
  formModal: any;
  personas: any;

  constructor(private CronogramaService: CronogramaCursoService){

  }

  ngOnInt(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("modalForm")
    );
  }

  mostrarModal(){
    this.CronogramaService.getCronogramaCurso({}).subscribe((data:any) => {
      this.personas = data.content
      console.log(this.personas)
    })
    // console.log(this.formModal)
    // this.formModal.show();
  }

}
