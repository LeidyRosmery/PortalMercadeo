sap.ui.define([
  "com/subciber/PortalMercadeo/controller/BaseController",
  "com/subciber/PortalMercadeo/model/usuario/models"
], function(BaseController, models) {
  "use strict";

  return BaseController.extend("com.subciber.PortalMercadeo.controller.usuario.Usuario", {
    onInit: function(event) {
      this.getView().setModel(new sap.ui.model.json.JSONModel(models.mockData()), "Usuario");
    },
    onRouteMatched: function(event) {

    },
    onAfterRendering: function() {

    },
    onNavegarAdd: function() {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("appUsuarioAdd");
    },
    onNavegarEdit:function(){
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("appUsuarioEdit");
    }
  });
});
