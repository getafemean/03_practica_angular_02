# Práctica 2 Angular

# Data Binding

## Interpolation

Sintaxis

´´´

{{template-expression JavaScript}}


´´´

- Angular las resuelve y devuelve un string
- No modifican el estado
- No soportan:
    - Operadores de asignación
    - Expresiones encadenadas (;)
    - Operadores incrementales (++ ó --)
    - Operadores lógicos (&& ó II)

## Property binding 

Sintaxis

´´´

[propiedadDOM]="template-expression JavaScript"

´´´

- Angular resuelve la expressión y le pasa el valor a la [propiedad DOM](https://developer.mozilla.org/es/docs/Web/API/Element) del elemento donde se implementa.
- Esa propiedad se puede confundir con atributo HTML porque en la mayoría de los casos tienen el mismo nombre.

## Event binding

Sintaxis 

´´´

(eventoDOM)="template-stament JavaScript"

´´´

- Angular resuelve la expresión cuando se dispara el [evento del DOM](https://developer.mozilla.org/es/docs/Web/Events) en el elemento, normalmente la invocación de un método, y ejecuta el resultado.
- Similares a la template-expressión pero si pueden modificar el estado.

## Two Way binding

Sintaxis 

´´´

[(ngModel)]="propiedad"

´´´

- Realiza la actualización de valores entre la plantilla y la clase del componente en los
dos sentidos y se implementa dentro de un input mediante FormsModule.

## Acceso al DOM en Angular

En ambos casos el acceso está disponible en ngAfterViewInit()

# Acceso a un elemento único

- Utiliza el decorador ViewChild => ver componente

# Acceso a varios elementos

- Utiliza el decorador ViewChildren => ver componente

