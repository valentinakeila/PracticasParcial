import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*Los primeros dos import importan al archivo los objetos que representarán a las librerías
React y ReactDOM. Ambas en conjunto forman React, solo que están separadas por
cuestiones de funcionalidad. Podemos visualizar que ambas se encuentran listadas en
package.json.
ReactDOM va a crear la root donde colocará toda la aplicación (en este caso es un
elemento del documento index.html que tiene la id root). Luego en root.render() renderiza la
aplicación entera nuestra.
Allí, vemos por qué importamos React, en donde dice React.StrictMode, este componente
nos permitirá reforzar código limpio y que siga las buenas prácticas de React, dándonos
advertencias en consola cuando no logramos hacerlo. Se aplicará sobre todos los
componentes que encierre (en este caso, App).
6
Unidad 1.2: Lógica de componentes - Laboratorio de computación III - TUP
En la cuarta línea, vemos que importamos el componente "App" de './App', el ./ significa que
nos paramos en la misma carpeta, y buscamos el archivo App.js (no es necesario agregar el
js en React). Luego, a ese componente lo vemos insertado en el primer atributo como si
fuera un elemento HTML (<App />) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
