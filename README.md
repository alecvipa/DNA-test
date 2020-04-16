# DNA-test
Esta aplicación está hecha para comparar secuencias de ADN con un modelo y, en caso de que haya o no una mutación, hacertelo saber por medio de un mensaje en la página principal.

 Tecnologías usadas:
 Firebase
 Node.js
 Express
 HTML
 CSS
 JavaScript
 JQuery
 Bootstrap

 Se accederá por medio del link: https://dna-testing.herokuapp.com/ a la aplicación. Existen 3 botones principales:
 1. Probar cadena de ADN: Cuyo objetivo es mandar el input del usuario al backend y compararlo con una secuencia modelo. Después regresar la respuesta en caso de que sea favorable o no.
 2. Agregar modelos: Este botón nos manda a una ruta donde el usuario puede entrar el nombre y la secuencia que desea guardar (pensada para secuencias con mutación). Al presionar el botón de agregar secuencia, la aplicación manda un request al back end y al servicio de firebase para hospedar en la base de datos la información y al mismo tiempo agregarla al array de modelos guardados, que se puede ver en el 3er boton.
 3. Ver secuencias guardadas: Este botón te manda a una ruta api de un array donde se hospeda una secuencia por default pero que, al agregar nuevas secuencias, las agrega al API desde la base de datos de firebase. 

 Métodos usados en rutas para la aplicación:
 POST, GET y rutas para renderizar el front-end

 Videos explicativos:

 —Parte 1: https://drive.google.com/file/d/1fNMZHxW8B5jxMUOxZnZ-vOpdV7GN3ZPB/view

 —Parte 2:https://drive.google.com/file/d/1cZnh69Jn8oNw0QfVcOve5qU3ACB5Hsut/view