sap.ui.define([
  "com/subciber/PortalMercadeo/controller/BaseController",
  "com/subciber/PortalMercadeo/servicio/usuario/UsuarioService"


], function(BaseController, UsuarioService) {
  "use strict";

  return BaseController.extend("com.subciber.PortalMercadeo.controller.usuario.AddUsuario", {
    onInit: function(event) {


    },
    onRouteMatched: function(event) {

    },
    onAfterRendering: function() {

    },

    onSave: function() {

      var usuarioNuevo=this.getView().getModel("usuarioAdd").getData();
      console.log("usuarioNuevo");
      var oParam = {
        "usuario": usuarioNuevo.usuario,
        "emailUsuario": usuarioNuevo.email,
        "imagenUsuario": usuarioNuevo.img,
        "nombre": usuarioNuevo.nombre,
        "apellido": usuarioNuevo.apellido
      };
      UsuarioService.registrarUsuario(oParam, function(result) {
        if (result.iCode === 1) {
          var mensaje = "El usuario se registró correctamente";
          util.http.validarRespuestaServicio(result, mensaje);
        } else {
          util.http.validarRespuestaServicio(result, result.sMessage);
        }
      }, self);
    }
  });
});
