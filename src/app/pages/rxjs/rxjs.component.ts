import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, pipe, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  public intervaloSub: Subscription;

  constructor() {
    this.intervaloSub = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervaloSub.unsubscribe();
  }

  //
  // this.retornaObservable()
  //   .pipe(retry(2))
  //   .subscribe(
  //     (valor) => console.info('subs', valor),
  //     (err) => console.error('Error', err),
  //     () => console.info('Observable', 'Terminado')
  //   );

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      map((valor) => {
        return valor + 1;
      }),
      filter((valor) => (valor % 2 === 0 ? true : false)),
      take(10)
    );
  }

  retornaObservable(): Observable<number> {
    let i = 0;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llego al valor de 2.');
        }
      }, 1000);
    });
  }
}
