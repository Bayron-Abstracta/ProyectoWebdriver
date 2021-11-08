const homePage = require('../pages/home.page');
const busquedaPage  = require('../pages/busqueda.page');
const basePage  = require('../pages/base.page');
const {expect} = require('chai');
const DATOS = require('../datos/articulos');
const CRED = require('../datos/credenciales');
const { cartEmpty } = require('../pages/home.page');
var path = require('path');

describe('AutomationPractice', function () {

    //Caso-01
    DATOS.forEach(({articulo}) => {
        it(`Buscar ${articulo}`, function () {
            await basePage.abrir('/')
            await homePage.buscar(articulo)
            await expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo)
        });
    }); 

    //Caso-02
    it('Validar Menú', function () {
        await basePage.abrir('/')
        await homePage.clickMenu()

        $('#block_top_menu').waitForDisplayed()
        expect(
        browser.checkElement($('#block_top_menu'), "menu_category", {}), "Error: La barra de menú no coincide").equal(0);

        basePage.abrir('/')
        $('#block_top_menu').waitForDisplayed()
        expect(browser.checkElement($('#block_top_menu'), 'menu_category', {})).to.not.equal(0)
        
    });

    //Caso-03
    it('Validar direccionamiento Logo', function () {
        basePage.abrir('/')
        homePage.clickLogo()
        homePage.logoWeb.waitForExist({timeoutMsg:'No existe el elemento'});
        expect(browser.getUrl()).to.contain("http://automationpractice.com/index.php", 
        "Error: La URL no coindide correcta");
    });

    //Caso-04
    it('Validar empty Cart', function () {
        basePage.abrir('/')
        homePage.clickCart()
        homePage.resultadoCartEmpy.waitForExist({timeoutMsg:'No existe el elemento'});
        expect(homePage.resultadoCartEmpy.getText()).to.equals('Your shopping cart is empty.', 
        "Error: Debería mostrar mensaje indicando que el carro esta vacío");
    });

    //Caso-05
    it('Validar mensaje', function () {
        basePage.abrir('/')
        homePage.clickContactUs()
        homePage.dropDownHeading.selectByIndex(1);
        homePage.escribirEmail(CRED.email);
        homePage.resultadoBlank.waitForExist({timeoutMsg:'No existe el elemento'});

        expect(homePage.resultadoBlank.getText()).to.equals('There is 1 error\nThe message cannot be blank.',
        "Error: Mensaje no coindide");
    });

    //Regresión Visual
    it('Comparación de Logo', () => {
        browser.url("http://automationpractice.com/index.php");
        (homePage.logoWeb).waitForDisplayed()
        expect(
            browser.checkElement($(homePage.logoWeb), "Logo_header", {
            }),
            "Error: El logo no coincide con el original"
        ).equal(0);
     });

 });