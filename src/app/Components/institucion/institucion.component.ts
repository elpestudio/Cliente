import { Component } from '@angular/core';
import { InstitucionService } from 'src/app/Services/institucion.service';
declare var window: any;

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.scss']
})
export class InstitucionComponent {
  formModal: any;

  instituciones: any;

  //Path Api
  pathApi: String;

  // Modal
  toogleModal: boolean;

  // Accion Formulario
  actionButton: String;
  actionForm: String;

  titleModal: String;

  // toast 
  message: String;
  toogleToast: boolean;
  toastCss = 'alert alert-dismissible alert-success';

  // Datos de Formulario
  id = 0;
  nombreFm = "0";
  direccionFm = '';
  correoFm = '';
  celularFm = '';
  estadoFm = 'Activo';


  constructor(private appServices: InstitucionService){
    this.getAllLista();
    this.toogleModal = false;
    this.actionButton = 'Guardar';
    this.actionForm = 'POST';
    this.pathApi = 'Institución'
    this.titleModal = 'Nueva '+ this.pathApi;

    this.message = '';
    this.toogleToast = false;
  }

  ngOnInt(): void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("modalForm")
    );


  }

  getAllLista(){
    this.appServices.getInstituciones().subscribe((data:any) => {
      this.instituciones = data.content;
    })
  }

  mostrarModal(){
    this.resetForm();
    this.actionButton = 'Guardar';
    this.actionForm = 'POST';
    this.pathApi = 'Institución'
    this.titleModal = 'Nueva '+ this.pathApi;
    this.toogleModal = true;
  }

  closeModal(){
    this.resetForm();
    this.toogleModal = false;
  }

  resetForm(){
    this.id = 0;
    this.nombreFm = '0';
    this.direccionFm = '';
    this.correoFm = '';
    this.celularFm = '';
    this.estadoFm = 'Activo';
  }

  sendForm(){
    const dataForm = {
        id: this.id,
        nombre: {id: this.nombreFm},
        direccion: this.direccionFm,
        correo: this.correoFm,
        celular: this.celularFm,
        estado: this.estadoFm,
    }

    if(this.id <= 0 && this.actionForm === 'POST'){
      this.appServices.setInstitucion(dataForm).subscribe(data => {
        this.closeModal();
        this.getAllLista();
        this.resetForm();
        this.toast('Registro satisfactorio.', 1800);
      })
    }

    if(this.id > 0 && this.actionForm === 'PUT'){
      this.appServices.updateInstitucion(dataForm).subscribe(data => {
        this.closeModal();
        this.getAllLista();
        this.resetForm();
        this.toast('Actualizacion satisfactorio.', 1800);
      })
    }
    

  }

  editItem(institucion:any){

    this.id = institucion.id;
    this.nombreFm = institucion.nombre;
    this.direccionFm = institucion.nombresApellidos;
    this.correoFm = institucion.correo;
    this.celularFm = institucion.celular;
    this.estadoFm = institucion.estado;

    this.actionButton = 'Actualizar';
    this.actionForm = 'PUT';
    this.pathApi = 'Institución'
    this.titleModal = 'Editar '+ this.pathApi;    

  }

  editModal(){
    if(this.id > 0){
      this.toogleModal = true;
    }else{
      this.id = 0;
      this.toastCss = 'alert alert-dismissible alert-danger';
      this.toast('No Existe registro seleccionado, para editar.', 1800);
    }
  }

  deleteitem(){
    if(this.id > 0){
      this.appServices.deleteInstitucion(this.id).subscribe(data => {
        this.getAllLista();
        this.resetForm();
        this.toast('Registro Eliminado Satisfactoriamente.', 1800);
      })
    }else{
      this.id = 0;
      this.toastCss = 'alert alert-dismissible alert-danger';
      this.toast('No Existe registro seleccionado, para eliminar.', 1800);
    }
  }

  toast(message: String, time: any){
    this.message = message;
      this.toogleToast = true;
      setTimeout(() => {
        this.toogleToast = false;
      }, time);
  }
}
