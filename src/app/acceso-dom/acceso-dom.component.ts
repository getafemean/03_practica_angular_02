import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-acceso-dom',
  templateUrl: './acceso-dom.component.html',
  styleUrls: ['./acceso-dom.component.scss']
})
export class AccesoDOMComponent implements OnInit {

  listaCompra: Array<string> = ['Agua','Cerveza','Vino','Patatas fritas'];
  @ViewChild('lista') listaRef: ElementRef;
  @ViewChildren('item') itemsRef: QueryList<any>;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    console.log(this.listaRef);
    console.log(this.itemsRef);
    this.renderer2.setStyle(this.listaRef.nativeElement, 'padding-left', '200px')
  }

  setDone(i: number): void {
    this.itemsRef.forEach((elem: any, index: number) => {
      if(i === index) {
        if(elem.nativeElement.style.textDecoration === '') {
          this.renderer2.setStyle(elem.nativeElement, 'text-decoration', 'line-through');
        } else {
          this.renderer2.setStyle(elem.nativeElement, 'text-decoration', '');
        }
      }
    })
  }

}
