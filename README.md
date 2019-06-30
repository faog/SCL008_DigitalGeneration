# Desafío: Tiendas en México 📌🏪🌎

## Preámbulo
Este corresponde al desarrollo de un "Code Challenge" que permite visualizar un mapa de google maps con información de distintas tiendas de México, colocando estos "stores" en forma de markers de Google Maps. Además, es posible realizar otras funcionalidades como agregar estos stores a favoritos y eliminarlos de la lista.

Para la [solución](https://faog.github.io/SCL008_DigitalGeneration/), se desarrolló usando javascript, usando la librería React y consumo de la api de google maps.

## Planificación 🚀

Para su implementación, este proyecto fue planificado en [trello](https://trello.com/b/Xm5MO5uo/desaf%C3%ADo-digital-generation), utilizando planning póker para la estimación del tiempo y complejidad de las distintas tareas desarrolladas. 

## Criterios de aceptación del proyecto

### Definición del producto

A partir de la información obtenida del desafío se implementó 4 historias de usuario que describen las necesidades de los usuarios, buscando cubrirlas a partir de los criterios de terminado y los criterios de aceptación que se desarrollan en cada una de ellas.

Además, es necesario que la aplicación considere los siguientes factores:

- **Correctitud:** la solución propuesta responde a lo solicitado por el usuario.
- **Calidad del código:** código entendible y mantenible en el tiempo.
- **Experiencia de usuario:** interfaz de usuario amigable e intuitiva.

#### HU1: Visualizar el mapa de google maps
Como un estudiante, quiero ver un mapa de la ciudad de México para poder observar lugares de mi interés.

**Criterio de terminado**: Para realizar la historia de usuario N°1 voy a:

  - Ver el mapa de google maps en la aplicación.
  - Ver una barra superior con las opciones de la aplicación.
  - Al seleccionar el botón favoritos, se despliegue un menú con mis favoritos.

#### HU2: Visualizar en el mapa los marcadores de tiendas
Como un estudiante, quiero ver un mapa que tenga todos los stores representados como marcadores en el mapa para poder encontrarlos.

**Criterio de terminado**: Para realizar la historia de usuario N°2 voy a:

  - Visualizar los marcadores en el mapa.
  - Mostrar información de la tienda al seleccionar un marcador.

#### HU3: Agregar un marcador a favoritos
Como un estudiante, quiero hacer clic en el marcador de un store para poder agregarlo a la lista de "favoritos".

**Criterio de terminado**: Para realizar la historia de usuario N°3 voy a:

  - Al abrir la información del store, se debe poder agregar en favoritos.
  - Al abrir los favoritos, se debe visualizar los stores agregados.
  - Si un store ya está en favoritos, se debe enviar un mensaje al usuario.

#### HU4: Eliminar un marcador de favoritos
Como estudiante, quiero hacer clic en un store de "favoritos" para poder eliminarlo de esta lista.

**Criterio de terminado**: Para realizar la historia de usuario N°4 voy a:

  - Cada store debe tener un botón que permita eliminarlo de favoritos.
  - Al eliminar el store, se debe generar un mensaje preguntando si estoy seguro de realizar la acción.
  - El store elegido fue eliminado de favoritos.

Los criterios de aceptación son iguales para las cuatro historias, siendo los siguientes:

#### Criterios de aceptación
  - Interfaz de usuario amigable e intuitiva.
  - Test unitarios usando jest y enzyme.
  - Código entendible y que cualquier desarrollador pueda acceder a este.
  - Desplegar la aplicación y etiquetar la versión desplegada (git tag).

## Prototipo ✏️

Una vez reconocido el usuario, comienza el proceso creativo de prototipo de baja fidelidad, destacando las principales vistas:

- Visualización de google maps.
- Barra lateral (sidebar) con los marcadores de los favoritos.

### Consideraciones en el desarrollo 🛠️

**Ejecución del interfaz de usuario HTML, CSS, JS**

* La lógica del proyecto fue implementada usando HTML, CSS y la librería de javascript [React](https://reactjs.org/).

**Implementación de la interfaz**

* Creación de componentes, reutilizables en el desarrollo de la aplicación.
* Para guardar los marcadores de la aplicación, se usó [local storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) que corresponde a un almacenamiento en el navegador.
* Instalación de [redux](https://es.redux.js.org/) para manejar los estados de las tiendas.
* Test a la aplicación, como es el caso de los componentes creados y a las acciones de redux.
* Integración continúa usando [Travis](https://travis-ci.com/faog/SCL008_DigitalGeneration).
* Manejo de estilos CSS pensado en mobile first y desktop.
* Trabajo respaldado mediante el uso de Git y GitHub :octocat:, realizando releases por historia de usuarios.
* Deploy con gh-pages de la [aplicación](https://faog.github.io/SCL008_DigitalGeneration/).

### Autora ✨

Fabiola Orellana 

8° Generación de Laboratoria.

Junio, 2019.
