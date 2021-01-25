---
title: Typescript Concepts
layout: post
categories:
- dev-notes
draft: true
excerpt_separator: "<!--more-->"
comments: true
tags: []
---

Un repaso de las lecciones aprendidas en el curso de typescript:


* Recursive types  --> given a type x = [x] | string ts and an instance ['hello', ['world']] ts recursively checks wether it belongs to any of the union sides 
* Never --> not assignable, indicates a function that never returns
* Assertion functions --> tell ts that is asserting on a type: allows narrow
* Type widening --> true is a type and boolean is a wider type 
* Nullish coalescing --> default value with ??. false ?? [] => false
* Optional chaining --> (null)?.something ==> undefined  
* Shared fields --> AdminUser and RegularUser both have :name in common
* Object values at runtime --> break type checking at runtime
* Generic function inference --> It is not neessary to specify the type when calling a generic function. ts can infer which type is T
* Index signatures --> define an object whose keys must have same specific type { [name: string]: number } 
* Type predicates --> la funci'on le dice a ts que no le asegura que devuelve un tipo. ejemplo recibe unknown devuelve string. As'i el compilador permite una asignacion a string.
* As --> tell type checker that you know the type of an object is 
* Generic function types --> improve the reusability of a function by making it independent of the parameters type. Funciones que se utilizan para manejar Arrays usualmente no les importa el tipo de elementos que maneje el array.  Ejemplo: intersecci'on de arrays. Otro ejemplo puede ser cualquier operaci'on para manejar estructuras de datos. 
* Generic object types --> 
* Void --> indicar una funcion que no devuelve nada. algo void no es asignable a nada.
* Error handling with unions
* Unknown
* Discriminated unions
* Logical operator narrowing
* Any
* Type soundness
* Type intersections
* Undefined in arrays
* Type syntax is consistent
* Nullability
* Object narrowing
* Conditional narrowing  --> const x: string | undefined = 'hello'; x.length fallaria; hay que decirle al compilador "hice un checkeo en runtime y puedo asegurar que es string" ese proceso es narrowing. una forma de hacerlo es utilizar if(typeof(x) === 'string') return x.legnth ( sin el if el compilador nos dice que undefined no responde a length ) 
* Functions as arguments
* Generic functions
* Literal object types
* Literal types
* Type unions
* Generic arrays
* Tuples
* Object types
* Return type inference
* Syntax errors vs type errors
* Arrays
* Function types
* Inference
* Type keyword
* JavaScript builtins
* Functions
* Operators
* Basic types
