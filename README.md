npm create vite@latest
cd books-champion
npm install
npm run dev
'react/prop-types':'off',

app principal
const App = () => {
return (
<div >

<h2></h2>
</div>
);
}
export default App;

componentes
const BookItem = () => {
return (
<div>BookItem</div>
)
}
export default BookItem

props
 {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.bookTitle}
            author={book.bookAuthor}
            rating={book.bookRating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
          />
        ))}

¿Qué es React?
React, también conocido como React.js, es una biblioteca JavaScript para construir interfaces de usuario. Su nombre proviene del adjetivo "reactive," que sugiere la capacidad de crear interfaces reactivas al input del usuario, similar al comportamiento de aplicaciones móviles.

Historia de las Páginas Web
Antes de React, las páginas web tenían un cierto retraso en la obtención de contenidos, ya que cada petición al servidor devolvía una página HTML completa. JavaScript mejora esta experiencia al ejecutarse directamente en el navegador, permitiendo manipular el DOM (Document Object Model) y hacer que las páginas sean más dinámicas y fluidas.

¿Por qué usar React en lugar de JavaScript "vainilla"?
React agiliza el desarrollo y permite escribir código más limpio, legible y fácil de testear. Además, facilita la reutilización de componentes, lo que no es tan sencillo de lograr con JavaScript puro.

¿Por qué usar React?
Ventajas de React

SPA (Single Page Applications): Las aplicaciones de una sola página cargan un solo documento HTML y manejan la navegación internamente, proporcionando una experiencia de usuario fluida.

Componentes reutilizables: React permite crear componentes reutilizables, lo que mejora la modularidad y mantenibilidad del código.
React vs Angular vs Vue
React

Flexibilidad: React es una librería que se enfoca en la construcción de interfaces de usuario, proporcionando solo las funcionalidades básicas. Esta flexibilidad puede ser una ventaja o una desventaja, dependiendo del proyecto.
Angular

Framework completo: Angular ofrece un conjunto completo de herramientas y utiliza TypeScript. Es considerado excesivo para proyectos pequeños o medianos.
Vue

Híbrido: Vue combina aspectos de Angular y React. Aunque no tiene una comunidad tan grande como React o Angular, está ganando popularidad y podría convertirse en líder en el futuro.
JavaScript Moderno
ES6+ (ECMAScript 6 y posteriores)

let vs const:
let se usa para variables que pueden cambiar.
const se usa para valores constantes que no se deben reasignar.
Arrow Functions:
Sintaxis más corta y manejan mejor el contexto this.
Características de JavaScript Moderno
Exportar e importar módulos
Permite compartir código entre archivos JS, facilitando la modularidad.

Clases
Aunque JS es principalmente funcional, las clases permiten una estructura más orientada a objetos y soportan herencia.

Spread & Rest Operators

Spread: Distribuye los valores de un arreglo u objeto.
Rest: Agrupa argumentos de una función en un arreglo.
Destructuring

Facilita la extracción de elementos de arreglos u objetos.
Variables en JavaScript
Primitivas vs Referencia

Primitivas: Copian el valor completo al duplicarse.
Referencia: Guardan un puntero al objeto o arreglo, no el valor completo.
Array Functions
map()

Transforma cada elemento de un arreglo y devuelve un nuevo arreglo.
filter()

Crea un sub-arreglo con los elementos que cumplen una condición.
reduce()

Reduce un arreglo a un solo valor, útil para sumatorias o promedios.


Lógica de componentes
React simplifica la creación de interfaces de usuario complejas mediante la lógica de componentes. Los componentes son bloques de código que funcionan como unidades principales de trabajo en React y ofrecen reusabilidad y separación de funcionalidades.

Creación de un nuevo proyecto de React
Para crear un proyecto React, se utiliza la herramienta vite, que requiere la instalación de Node.js y npm. El proceso de creación involucra comandos para iniciar un nuevo proyecto y configurarlo.

Analizando un proyecto de React
Los componentes en React están escritos en JavaScript o TypeScript y se benefician de funcionalidades propias de React, como hooks y métodos del ciclo de vida. El archivo index.js importa las librerías necesarias y renderiza la aplicación.

JSX
JSX es una sintaxis que permite escribir código HTML dentro de archivos JavaScript, que React traduce y optimiza. Permite definir el estado deseado de los elementos en el sitio web.

props en React
Las props son propiedades que se pasan desde un componente padre a un componente hijo, permitiendo reutilizar componentes con diferentes datos dinámicos.

PropTypes
PropTypes se usa para definir el tipo de las props que un componente espera recibir, mejorando la robustez del código y asegurando que los datos pasados a los componentes sean del tipo correcto.


Manejo de eventos en React: En React, podemos manejar eventos como clics, cambios de texto, etc., utilizando atributos especiales en los elementos JSX, como onClick, onChange, etc. Estos eventos permiten que la aplicación reaccione a las acciones del usuario.

Estado (State) en React: El estado (state) es un concepto fundamental en React que representa la información dinámica de un componente. Permite que los componentes React mantengan y actualicen datos de forma interna. El hook useState es una función proporcionada por React que permite agregar estado a los componentes funcionales.

useState: Es un hook de React que permite agregar estado a los componentes funcionales. Se utiliza para declarar una variable de estado y una función para actualizarla. Cuando el estado cambia, React se encarga de actualizar automáticamente la interfaz de usuario para reflejar esos cambios.

Formularios en React: Los formularios en React funcionan de manera similar a los formularios HTML tradicionales, pero con algunas diferencias clave. Utilizamos los mismos elementos de formulario HTML, como input, select y textarea, pero React maneja el estado y el comportamiento del formulario de manera diferente, utilizando el estado interno del componente para controlar los valores de entrada y responder a los eventos del formulario.

Two-way binding: El "two-way binding" es un patrón en el que los cambios en el modelo (estado) se reflejan automáticamente en la vista (interfaz de usuario) y viceversa. En React, esto se logra en los formularios vinculando el valor de los elementos de entrada al estado del componente y actualizando el estado cuando se produce un cambio en los elementos de entrada.

Pasar datos entre componentes: En React, los datos se pueden pasar entre componentes utilizando props. Los componentes pueden enviar datos a sus componentes hijos mediante props y recibir datos de sus componentes padres mediante funciones de devolución de llamada (callback functions) pasadas como props.


Renderizado condicional de elementos:
En React, el renderizado condicional se refiere a la capacidad de mostrar o no mostrar componentes en función de ciertas condiciones. Esto permite construir interfaces de usuario dinámicas que responden a la interacción del usuario o a cambios en los datos.

Renderizado de listas con datos: 
En React, es común renderizar listas de elementos de manera dinámica, especialmente cuando los datos provienen de un arreglo. Esto se logra utilizando la función map() en el JSX para generar componentes de forma iterativa con base en los elementos del arreglo.

Función map() en React: 
La función map() en JavaScript se utiliza para iterar sobre todos los elementos de un arreglo y generar un nuevo arreglo con elementos modificados según una función proporcionada. En React, se utiliza para generar componentes dinámicamente a partir de los datos de una lista.

Propiedad key en listas:
En React, cada elemento de una lista dinámica debe tener una propiedad key única. Esta propiedad se utiliza internamente por React para identificar de manera eficiente los elementos y optimizar el rendimiento del renderizado de listas. La falta de una key o el uso de una key no única puede generar advertencias o comportamientos inesperados.

Uso de useState en React: 
useState es un hook de React que permite agregar estado a componentes funcionales. Se utiliza para declarar una variable de estado y una función para actualizarla. E
sto es útil para manejar datos dinámicos dentro de un componente

Creación de formularios de Login:
En React, la creación de formularios de inicio de sesión puede realizarse utilizando componentes funcionales que contienen elementos como inputs y botones. Estos formularios pueden gestionarse para capturar y procesar la información ingresada por el usuario.

Uso del hook useRef en React:
El hook useRef en React permite acceder a elementos del DOM y realizar operaciones sobre ellos. Esto incluye la capacidad de obtener valores actuales de elementos, aplicar eventos y manipular el DOM de manera directa.

Manejo de referencias en formularios:
Al utilizar useRef en un formulario, se pueden crear referencias a elementos específicos como inputs. Estas referencias pueden ser utilizadas para acceder a los valores ingresados por el usuario y aplicar estilos o eventos según sea necesario.

Componentes controlados vs componentes no controlados: 
En React, existen dos enfoques principales para manejar el estado de los elementos de un formulario.
Los componentes controlados son aquellos cuyos valores son gestionados por React a través del estado del componente,
mientras que los componentes no controlados son aquellos cuyos valores son accedidos directamente desde el DOM mediante referencias.

Recomendaciones de React sobre el uso de componentes controlados: 
Aunque los componentes no controlados proporcionan acceso directo a los elementos del DOM, 
React generalmente recomienda el uso de componentes controlados para mantener un código más limpio, trazable y coherente con las prácticas de desarrollo de React.

SPA (Single-Page Application): 
Las aplicaciones React son del tipo SPA, lo que significa que se mueven a través de componentes en lugar de recorrer diferentes páginas HTML. Esto se logra insertando la aplicación en un solo archivo HTML.

Librería react-router:
Para gestionar la navegación en una aplicación React, se utiliza la librería react-router, que permite definir rutas para cada componente y establecer la lógica de navegación entre ellos.

Instalación de react-router: 
Para comenzar a utilizar react-router, es necesario instalar la librería en el proyecto utilizando el comando npm i react-router-dom.

Definición de rutas: 
Se definen rutas utilizando el componente BrowserRouter, donde cada ruta especifica un path y el componente que debe renderizarse cuando se accede a esa ruta.

Rutas protegidas: 
Son aquellas rutas que requieren ciertas condiciones para ser accedidas, como estar logueado en la aplicación. Para implementar rutas protegidas, se utiliza el componente Protected que redirige al usuario si no cumple con las condiciones necesarias.

Rutas dinámicas y navegación con parámetros opcionales:
Se pueden definir rutas que contengan variables dinámicas, como identificadores de recursos, y acceder a estos parámetros mediante el hook useParams. Esto permite navegar a páginas específicas según la información proporcionada en la URL.

Rutas anidadas: 
Permite estructurar la aplicación de manera jerárquica, donde un componente principal puede contener subrutas o rutas hijas. Esto facilita la organización y mantenimiento del código.

Manejo de errores 404:
Se puede definir una ruta genérica para manejar los errores 404 o páginas no encontradas.
Esto se logra mediante el componente PageNotFound, que se renderiza cuando ninguna otra ruta coincide con la URL ingresada.

Efectos secundarios o paralelos: 
Son tareas que ocurren fuera del ciclo de vida normal de los componentes de React y pueden bloquear o retrasar su renderizado. Se utilizan para acciones como enviar solicitudes al servidor, guardar datos en el almacenamiento local del navegador o manejar temporizadores. Se implementan con el hook useEffect.

Manejo de estados más complejos con Reducers:
En casos donde hay múltiples estados relacionados entre sí y con una complejidad alta, se pueden reducir a un único estado utilizando el hook useReducer. Este hook se utiliza junto con un reducer, que es una función que determina cómo se actualiza el estado en respuesta a acciones.

Manejo del estado global de la aplicación mediante Context:
React Context permite compartir datos entre componentes de forma eficiente, evitando la necesidad de pasar props manualmente a través de múltiples niveles de componentes. Se utiliza especialmente para datos que son globales para toda la aplicación.
