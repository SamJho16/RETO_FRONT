Feature: Login
    Como un cliente de Sauce Demo,
    Quiero poder iniciar sesión, agregar productos al carrito y completar una compra
    Para poder adquirir los productos que necesito

    Background:
        Given navego hasta la pagina de login de Sauce Demo

    Scenario: Realizar una compra
        Given ingreso mis credenciales validas
        When hago click en el boton de login
        Then me redirige a la pagina de productos
        When agrego productos al carrito
        And hago click en el carrito
        Then me redirige a la pagina del carrito
        And visualizo el producto agregado
        When hago click en el boton de checkout
        Then me redirige a la pagina de informacion del cliente
        When ingreso mi informacion personal
        And hago click en el boton de continue
        Then me redirige a la pagina de resumen de la orden
        When hago click en el boton de finish
        Then me redirige a la pagina de compra finalizada
        
        
