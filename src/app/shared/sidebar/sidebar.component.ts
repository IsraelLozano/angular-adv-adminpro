import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usurario.models';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  public usuario: Usuario;

  menuItems: any[];

  constructor(
    private sidebarService: SidebarService,
    private usuarioService: UsuarioService
  ) {
    this.menuItems = sidebarService.menu;
    this.usuario = usuarioService.usuario;
    const resp = this.usuario.nombre.length > 20;
  }

  ngOnInit(): void {}
}
