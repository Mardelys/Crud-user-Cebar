
# Aplicación de usuarios Cebar SAS(CRUD)

<img src="https://user-images.githubusercontent.com/114613889/218232663-e5f71344-346e-4b2b-9b99-a919d4bb6c29.png"
 width= "700px"/>
 
  Es una aplicación web desarrollada con la finalidad de manipular una base de datos de usuarios, ésta permite obtener usuarios de una API externa,crear ,modificar,y borrar los usuarios de la misma a conveniencia, tiene la finalidad de facilitar la gestion de estos datos.

Es desarrollada en Nextjs y se le dan estilos con SASS.



# Despliegue e instrucciones de uso

Acontinuación dejo el link del despliegue de la aplicación terminada, se hizo utilizando la plataforma vercel.app

## https://cebar-sas.vercel.app/

- Se hace click sobre el link de despliegue


- Al cargar la página se observa el formulario y la tabla de usuarios la cual contiene sus botones de editar y eliminar.


- Crear usuario: Para crear el usuario llenar los campos del formulario y darle click al botón de agregar y como resultado, al final de la tabla se agregará el nuevo usuario.


- Editar usuario: para poder editar el usuario, en la tabla cada uno de ellos tiene su botón de editar representado por un lapiz, al clickear sobre este muestra un modal con el formulario y los datos de ese usuario, simplemente modifique los datos que hay en los input y para guardarlos se da click al botón con el ícono de finalizado(success).


- Eliminar usuario: Cada usuario tiene un botón con un ícono de bote de basura el cual representa la acción de eliminarlo, al clickear sobre este automaticamente se elimina y muestra una alerta de eliminado con éxito.



# ¿Cómo se puede utilizar este proyecto?
Para poder clonar este repositorio se deben seguir los siguientes pasos:

- Al acceder al repositorio se encuentra en la seccion superior derecha un botón de color verde que dice Code<>, se debe clickear sobre el botón y despliega una serie de opciones.

![fork](https://user-images.githubusercontent.com/114613889/218234186-ea6a4a2a-c663-4a4d-bd10-452212993a2c.png)

- De las siguientes opciones que tienes para descargar el código, recomiendo clonar el repositorio, se debe copiar el  siguiente link https://github.com/Mardelys/Crud-user-Cebar.git.

<img src="https://user-images.githubusercontent.com/114613889/218234238-62bf5341-8a3d-4477-961c-96db6ea4c091.png"
 width= "300px"/>

- Para clonar el repositorio en tu computadora crea una carpeta en cualquier lugar del equipo y abre un terminal, despues de hacer esto utiliza el comando git clone + el link copiado y + enter, de este modo se descargaran todas las carpetas y archivos del repositorio.
- Después de el paso anterior, abre el editor de texto de tu preferencia.



<img src="https://user-images.githubusercontent.com/114613889/218234990-5216e404-e794-4679-a122-66256c32bec2.png"
 width= "500px"/>
<img src="https://user-images.githubusercontent.com/114613889/218234426-090c8fe7-f5a4-4782-b22e-05602947d473.png"
 width= "500px"/>
 
 # Planteamiento de estructura de carpetas 
 
 - Se utiliza la estructura de carpetas inicial de el proyecto de Nextjs, se eliminan las innecesarias obteniendo este resultado:
<img src="https://user-images.githubusercontent.com/114613889/218235267-c1569846-7f5c-49af-a1b2-5797e69137b9.png"
 width= "200px"/>
 
 - Dentro de la carpeta src se encuentran las carpetas components, pages y styles


<img src="https://user-images.githubusercontent.com/114613889/218235301-dd11fda5-6705-4890-99c5-d70656f17cd4.png"
 width= "200px"/>


- Dentro de las carpetas se encuentran los siguientes archivos:

*Carpeta components:
  - AddUser.jsx: este componente contiene el formulario para agregar el usuario, se define la función  handleOnSubmit la cual se encarga de tomar los valores de los input para poder reemplazar lo que se escriba en ellos y asignarselo como valor a las props definidas en la base de datos, de este modo se puede reflejar correctamente el usuario al agregarlo.
    
 - User.jsx: Este componente es el que refleja los datos obtenidos de la api jasonplaceholder/users pero no solo eso, tambien contiene las funciones encargadas de la modificación de estos datos ya definidos, contiene las funciones de editar y eliminar en sus respectivos botones 
    
<img src="https://user-images.githubusercontent.com/114613889/218235341-75fc4875-9530-4c29-8d4c-4755fdb82360.png"
 width= "200px"/>
 
 
 *Carpeta pages: Propia de next js se utiliza para definir las rutas de la aplicación simplificando así su programación.
    
  - App.js: Archivo predeterminado de next donde se renderiza toda la aplicacón desarrollada.
    
  - index.jsx: El index contiene lo más importante para el desarrollo de esta aplicación. Dentro de él se encuentra la petición get a la api realizada por la promesa que hacemos de la misma mediante el fetch, así mismo las peticiones POST, PUT y DELETE en las cuales de basa nuestro crud. El índex tambien es el encargado de renderizar nuestros componentes AddUser y User para darle forma a nuestra aplicación.
    
    
  * Carpeta Styles: contiene un archivo llamado styles.scss con los que se le dio estilo a toda la aplicación utilizando sass por preferencia del desarrollador.




 

