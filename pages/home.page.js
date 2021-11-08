const basePage = require('../pages/base.page');
 class HomePage {

    //WebElements
    get barraDeBusqueda(){ return $('[name="search_query"]') }
    get menuTshirt(){ return $('//*[@id="block_top_menu"]/ul/li[3]/a') }
    get logoWeb(){ return $('#header_logo') }
    get cart(){ return $('//*[@id="header"]/div[3]/div/div/div[3]/div/a') }
    get cartEmpty(){ return $('[class="alert alert-warning"]') }
    get resultadoCartEmpy(){ return $('[class="alert alert-warning"]') }

    get contactUs(){ return $('//*[@id="contact-link"]/a') }
    get barraEmail(){ return $('#email') }
    get resultadoBlank(){ return $('[class="alert alert-danger"]') }

    get dropDownHeading(){ return $('#uniform-id_contact') }

    get menu(){ return $('#block_top_menu')}
    

    
    //-------------------------------------------------------------------------------------------------------//

    /**
     * Escribe el artículo en el campo de búsqueda y presiona Enter
     * @param {String} articulo que se buscará
     */
    async clickContactUs(){
        addStep('Obtener Contact Us')
        await basePage.clickearElemento(await this.contactUs)
    }

    async buscar(articulo) {
        addStep(`Buscar artículo: ${articulo}`)
        await basePage.clearAndSendKeys(await this.barraDeBusqueda, articulo);
        await this.barraDeBusqueda.keys('Enter');
    }

    async escribirEmail(email) {
        addStep('Escribir Email')
        await  basePage.clearAndSendKeys(await this.barraEmail, email);
        await this.barraEmail.keys('Enter');
    }

    async clickMenu(){
        addStep('Obtener menú')
        await basePage.clickearElemento(await this.menuTshirt)
    }

    async clickLogo(){
        addStep('Obtener Logo')
        await basePage.clickearElemento(await this.logoWeb)
    }

    async clickCart(){
        addStep('Obtener Carro')
        await  basePage.clickearElemento(await this.cart)
    }

    /**
     * Obtener texto de la barra de búsqueda
     */
     async obtenerTextoBusqueda() {
        addStep('Obtener texto de la barra de búsqueda')
        return await this.barraDeBusqueda.getValue();
    }

    async obtenerLogoResultado() {
        addStep('Obtener resultado')
        return await this.logoWeb.getText();
    }

    async obtenerTextoCarroVacio() {
        addStep('Obtener resultado')
        return await this.cartEmpty.getText();
    }

    async obtenerNombreResultadoCarroVacio() {
        addStep('Obtener resultado')
        return await this.resultadoCartEmpy.getText();
    }

 }

 module.exports = new HomePage();