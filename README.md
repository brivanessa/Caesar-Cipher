# Cifrado César

## Índice

* [1. Resumen del proyecto](#1-Resumen-del-proyecto)
* [2. Interfaz de usuario](#2-Interfaz-de-usuario)
* [3. Investigación del usuario](#3-Investigación-del-usuario)
* [4. Razonamiento](#4-Razonamiento)
* [5. Proceso de planificación](#5-Proceso-de-planificación)
* [6. Consideraciones generales](#6-Consideraciones-generales)
* [7. Consideraciones técnicas](#7-Consideraciones-técnicas)
* [8. Objetivos de aprendizaje y Checklist](#8-Objetivos-de-aprendizaje-y-Checklist)


## 1. Resumen del proyecto
Se ha creado una página web que servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres. Para el proceso de encriptado se utilizó el Cifrado César que es una de las técnicas mas simples del cifrado por sustitución.

Se puede acceder al proyecto siguiendo el enlace: 
[Decipher History](https://brivanessa.github.io/Caesar-Cipher/src/)

## 2. Interfaz de usuario
El usuario mediante los botones `Cifrar` y `Descifrar` podrá escribir un mensaje (texto) y elegir un `número de desplazamiento`. El número elegido indica cuantas posiciones se desea que se desplace cada letra del mensaje escrito, este número de desplazamiento será la clave para poder `Cifrar` y/o `Descifrar` el mensaje que se desea encriptar y/o descubrir. Finalmente se podrá ver el resumen del requerimiento y el resultado del mensaje (cifrado/descifrado).

## 3. Investigación del usuario
### ¿Quiénes son los principales usuarios?
Los usuarios son estudiantes o personas curiosas que quieren aprender e investigar sobre diversos temas, curiosidades y hechos históricos de personajes relevantes de la historia universal. 
### ¿Cuáles son los objetivos de estos usuarios?
- Saber que es la criptográfia.
- Conocer los usos de la criptografía en la historia.
- Encontrar referencias históricas interesantes.
- Poder cifrar/descifrar mensajes usando el cifrado por sustitución.
### ¿Cómo se está abordando el cumplimiento de los objetivos?
- Jugando `Guess Who?` el usuario aprenderá como funciona la criptografía (principalmente el cifrado por sustitución) y al mismo tiempo podrá descifrar los nombres de minimamente dos personajes de la historia que usaron la criptografía como herramienta de comunicación. Los primeros conocimientos que obtenga le ayudaran a medir el impacto de la criptografia en los hechos historicos y como se sigue usando y a evolucionado en la actualidad.

## 4. Razonamiento
Para la encriptación del mensaje se utiliza la fórmula matemática del Cifrado César, código `ASCII` y los métodos `charCodeAt()`y `String.fromCharCode()`. De modo que la fórmula desarrolada fue:
 `(X - 65 + N) % 26 + 65` donde:

* `X`       : Usando el método `string.charCodeAt()` obtenemos el Código ASCII de cada letra.
* `X - 65`  : Para encontrar su ubicación en el alfabeto.
* `N`       : Es el offset (número de desplazamiento).
* `... % 26`: Es el residuo de 26.
* `... +65` : Para obtener el nuevo código `ASCII`.
Finalmente usando String.fromCharCode(código `ASCII`) obtenemos la letra cifrada. 
![Fórmula_Cifrar_BriVane](https://user-images.githubusercontent.com/105663345/172266229-b83b0f78-5288-4feb-b958-7446744395cf.png)

Para descifrar el mensaje se utiliza la fórmula matemática invertida, código `ASCII` y los métodos `charCodeAt()`y `String.fromCharCode()`. De modo que la fórmula desarrolada fue: 
`[ {X-65} + {26-(N%26)} ] % 26 + 65` donde:

* `X`        : Usando el método `string.charCodeAt()` obtenemos el Código ASCII de cada letra.
* `X - 65`   : Para encontrar su ubicación en el alfabeto.
* `N`        : Es el offset (número de desplazamiento).
* `(N%26)`   : Es el residuo de 26.
* `26-(N%26)`: 26 menos el residuo de 26, corresponde al nuevo número de desplazamiento.
* `... % 26` : Es el nuevo residuo de 26.
* `... +65`  : Para obtener el codigo ASCII de la letra descifrada.
Finalmente usando String.fromCharCode (código `ASCII`) obtenemos la letra descifrada. 
![Fóruma_Descifrar_BriVane](https://user-images.githubusercontent.com/105663345/172266243-cadd8b32-d60a-4163-afb1-2e5280620730.png)

Para cifrar o descifrar el mensaje con letras en minúscula se utiliza las mismas fórmulas matemáticas pero sustituyendo el valor 65 (código `ASCII` de la letra `A` en mayúscula) por el de 97 (código `ASCII` de la letra `a` en minúscula):
+ Para cifrar un mensaje   : `(X - 97 + N) % 26 + 97`
+ Para descifrar un mensaje: `[ {X-97} + {26-(N%26)} ] % 26 + 97`

## 5. Proceso de planificación

```text
.Backlog de producto: Página web Cifrado César: "DECIPHER HISTORY"

Sprint 1 (Semana 1)
├── Crear historias de usuario: TRELLO.
├── Realizar prototipo del proyecto: FIGMA.
├── Realizar la estructura de la página web: HTML.
└── Cifrar un mensaje (Funcionalidad).

Sprint 2 (Semana 2)
├── Descifrar un mensaje (Funcionalidad).
├── Borrar los datos ingresados (Funcionalidad).
├── Diseñar el formato de la Interfaz.
├── Completar el "Cifrado" y "Descifrado" para letras en minúscula.
└── Completar el "Cifrado" y "Descifrado" para otros caracteres y valores negativos.

Sprint 3 (Semana 3)
├── Detallar el proceso de creación e implementación del proyecto usando un "README.md".
└── Usar GitHub pages para desplegar la interfaz del proyecto.
```
## 6. Consideraciones generales
Se puede visualizar el prototipo inicial del proyecto siguiendo el enlace: 
[Decipher History](https://www.figma.com/proto/GUVA0qH6d6cGcrPEUyINKq/Untitled?node-id=3%3A5&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A5)

## 7. Consideraciones técnicas
Al ejecutar los tests (pruebas) usando el comando `npm test`, se verifica que el nivel de cobertura de los tests unitarios es del 100% en _statements_, _functions_, _lines_, y _branches_. 
Se han realizado los cambios necesarios para permitir el uso de letras en minúsculas y caracteres como espacios, puntuación, ñ, etc, asi como valores negativos en el `offset` (Desplazamiento). 

## 8. Objetivos de aprendizaje y Checklist
Al realizar el proyecto se ha logrado principalmente los siguientes `objetivos de aprendizaje`:
### HTML
* [x]Uso de HTML semántico.
### CSS
* [x]Uso de selectores de CSS.
* [x]Modelo de caja (box model): borde, margen, padding.
### Web APIs
* [x]Uso de selectores del DOM.
* [ ]Manejo de eventos del DOM (listeners, propagación, delegación).
* [ ]Manipulación dinámica del DOM.
### JavaScript
* [x]Tipos de datos primitivos.
* [x]Strings (cadenas de caracteres).
* [x]Variables (declaración, asignación, ámbito).
* [x]Uso de condicionales (if-else, switch, operador ternario, lógica booleana).
* [x]Uso de bucles/ciclos (while, for, for..of).
* [x]Funciones (params, args, return).
* [x]Pruebas unitarias (unit tests).
* [ ]Módulos de ECMAScript (ES Modules).
* [ ]Uso de linter (ESLINT).
* [ ]Uso de identificadores descriptivos (Nomenclatura y Semántica).
### Control de Versiones (Git y GitHub)
* [x]Git: Instalación y configuración.
* [x]Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote).
* [ ]GitHub: Creación de cuenta y repos, configuración de llaves SSH.
* [x]GitHub: Despliegue con GitHub Pages.
### user-centricity
* [ ]Diseñar un producto o servicio poniendo a la usuaria en el centro.
### product-design
* [x]Crear prototipos de alta fidelidad que incluyan interacciones.
* [ ]Seguir los principios básicos de diseño visual.

El proyecto cumple con los requerimientos obligatorios y opcionales del `Checklist`:
### Parte Obligatoria
* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [x] Cifra/descifra minúsculas
* [x] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [x] Permite usar un `offset` negativo.
