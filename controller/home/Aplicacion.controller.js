sap.ui.define([
  "com/subciber/PortalMercadeo/controller/BaseController",
  'sap/ui/model/json/JSONModel',
	"com/subciber/PortalMercadeo/constante/home/Constantes"
], function(BaseController, JSONModel, Constantes) {
  "use strict";

  return BaseController.extend("com.subciber.PortalMercadeo.controller.home.Aplicacion", {
    onInit: function(event) {

    },
    onAfterRendering: function() {

    },
    onNavegarAplicacion:function(oEvent){
      try{
        var sPath = oEvent.getSource().getBindingContext("usuarioLogeadoModel").getPath();
        var oModel = this.getView().getModel("usuarioLogeadoModel");
        var oContext = oModel.getProperty(sPath);
        window.location.href = Constantes.urlAplicacion + oContext.url;
        window.location.reload();
      }catch(e){
        console.error("Error: "+e);
      }
    }
  });
});
