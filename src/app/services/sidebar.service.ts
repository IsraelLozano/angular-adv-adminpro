import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}

  menu: any[] = [
    {
      titulo: 'Dashboard!!',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Greafica', url: 'grafica1' },
      ],
    },
  ]
}
