Feature: Login
    Como un cliente de Sauce Demo,
    Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
    Para poder adquirir los productos que necesito

    Background:
        Given navego hasta la pagina de login de Sauce Demo

    Scenario: Login exitoso
        Given ingreso mis credenciales validas
        When hago click en el boton de login
        Then me redirige a la pagina de productos

    Scenario: Login Fallido
        Given ingreso mis credenciales bloqueadas
        When hago click en el boton de login
        Then se muestra un mensaje de error indicando que el usuario esta bloqueado  

