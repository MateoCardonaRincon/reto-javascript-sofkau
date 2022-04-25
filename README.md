# reto-javascript-sofkau
### Desarrollo del juego de preguntas y respuestas en JavaScript. <br>
En este proyecto se desarrollaron habilidades en el manejo del DOM con JavaScript,
usando los métodos más comunes de manipulación como createElement(), appendChild(),
replaceChildren(), setAttributes(), getElementById(), entre otros. <br>
Con estos métodos, pudimos crear nodos y añadir y remover elementos HTML de nodos específicos del DOM. <br>

### Funcionalidades del juego

### Persistencia de datos en el Local Storage
Se carga un banco de preguntas al local storage, en 5 items diferentes, 1 por categoría.

### Menú principal
Se muestra un menú principal con 3 botones: Jugar, Historial y Añadir pregunta. Al presionar uno
de estos botones se le mostrará al usuario la vista correspondiente. En cada una de esta vistas el usuario tendrá la
posibilidad de regrasar al menú principal.

### Responder un cuestionario:
Se puede responder un cuestionario, seleccionando de dicho banco las preguntas y sus respuestas de forma aleatoria.
Cada pregunta respondida correctamente dará puntos que se irán acumulando a lo largo de las 5 rondas.<br>
Si un jugador se retira, se almacena en el locar storage el puntaje que lleva hasta el momento.<br>
Si el jugador responde mal una pregunta, no se almacenará su puntaje y será regresado al menú principal.<br>

Tanto los puntos, como los mensaje de éxito o fallo, se muestran en un alert.

### Ver historial de partidas
Cada jugador que termine un cuestionario por completo o se retire voluntariamente quedará almacenado con su puntaje y nombre<br>
en una tabla ordenada de mayor a menor puntaje.

### Agregar una nueva pregunta
Para agregar una pregunta nueva al banco se debe especificar: la pregunta, la respuesta correcta y las 3 respuestas erradas,
asimismo, la categoría a la que pertenece dicha pregunta. Al presionar el botón "Añadir pregunta"
se añade esta a la lista de 5 preguntas iniciales, almacenadas en el local storage.

