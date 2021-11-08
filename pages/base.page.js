const PAGE_TIMEOUT = 10000

class BasePage {


   /**
    * Abrir página
    * @param {String} ruta a la cual acceder
    */
   async abrir(ruta) {
    addStep('Abrir URL')
    await browser.url(`${ruta}`);
   }


   /**
    * Esperar a que un elemento sea clickeable y hacer click
    * @param {Object} elemento a clickear
    */
   async clickearElemento(elemento) {
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.click();
   }


   /**
    * Método para enviar texto a un elemento
    * @param {Object} elemento que recibirá el texto
    * @param {String} texto a envíar 
    */
   async clearAndSendKeys(elemento, texto){
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.clearValue();
        await elemento.click();
       await elemento.keys(texto);
   }


}

// Exportar una instancia de la página para poder utilizarla sin instanciarla en cada test
module.exports = new BasePage();