const basePage = require('../pages/base.page');

 class BusquedaPage {

    //Elementos Web
    get resultado(){ return $('h5') }
    get logo(){ return $('h5') }


    //-------------------------------------------------------------------------------------------------------//
  
    /**
     * Click en el resultado de la búsqueda
     */
    async ingresarAlResultado() {
        await basePage.clickOnElement(this.resultado);
    }

    /**
     * Obtener texto del resultado de la búsqueda
     */
    async obtenerNombreResultado() {
        addStep('Obtener resultado')
        return await this.resultado.getText();
    }

 }

 module.exports = new BusquedaPage();