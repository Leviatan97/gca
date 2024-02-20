Explicación:

El proyecto fue desarrollado con 2 modulos Page y Component.

En el modulo de page es donde se visualiza la pagina la cual llama los componente del modulo Component, en ella esta estructurada con los siguientes componentes:

- header
- lista
- mapa

Cada componente tiene su logica con la finalidad de poder realizar buen mantenimiento a la aplicación.

Para poder listar las personas se consume el servicio desde la page y esta le envia la información al componente lista
Para poder crear un usuario el componente lista llama al componente modal el cual contiene el formulario para la creación de usuarios, se llenan los datos y luego el componente modal se lo envia al componente lista y el componente lista se lo envia a la page la cual realiza la petición de creación de usuario, una vez sea creado el usuario, la aplicación se recarga para mostrar la lista completa.
