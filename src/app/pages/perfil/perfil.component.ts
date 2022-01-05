import { Usuario } from 'src/app/models/usurario.models';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [],
})
export class PerfilComponent implements OnInit {
  public perfilForm!: FormGroup;
  public usuario!: Usuario;
  public imgTemp: any;

  public imageSubir!: File;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private fileUploadService: FileUploadService
  ) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
    });
  }

  actualizarPerfil() {
    this.usuarioService.actualizarPerfil(this.perfilForm.value).subscribe(
      (resp) => {
        const { nombre, email } = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.email = email;
        Swal.fire('Guardado', 'Los cambios fueron grabados.', 'success');
      },
      (error) => {
        Swal.fire('Advertencia', error.error.msg, 'warning');
      }
    );
  }

  cambiarImage(event: any) {
    if (!event?.target?.files[0]) {
      return (this.imgTemp = null);
    }
    this.imageSubir = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.imageSubir);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    };
    return 0;
  }

  subirImagen() {
    this.fileUploadService
      .actualizarFoto(this.imageSubir, 'usuarios', this.usuario.uid!)
      .then((image) => {
        this.usuario.img = image;
        Swal.fire('Guardado', 'Los cambios fueron grabados.', 'success');
      })
      .catch((erro) => {
        console.log(erro);
        Swal.fire('Advertencia', 'No se pudo subir la imagen.', 'warning');
      });
  }
}
