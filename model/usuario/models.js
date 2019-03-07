sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function(JSONModel, Device) {
  "use strict";

  return {
    createDeviceModel: function() {
      var oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },
    //
    // usuarioModel: function() {
    //     var oUsuarioLogin      = {};
    //     oUsuarioLogin.usuario  = "";
    //     oUsuarioLogin.clave    = "";
    //     var oModel = new JSONModel(oUsuarioLogin);
    //     return oModel;
    //   },

    usuarioAdd: function() {
      var oUsuarioAdd = {};
      oUsuarioAdd.nombre = "";
      oUsuarioAdd.apellido = "";
      oUsuarioAdd.usuario = "";
      oUsuarioAdd.email = "";
      oUsuarioAdd.img = "";
      var oModel = new JSONModel(oUsuarioAdd);
      return oModel;
    },
    usuario: function() {
      var usuario = {};
      var oModel = new JSONModel(usuario);
      return oModel;
    },
    mockData: function() {
      var lista = [];
      lista.push({
        nombres: "Milagros ",
        apellidos: "Vera Coa",
        email: "vera@seidor.com",
        imagen: "img",
        usuario: "Av. Javier Prado 529 - La Molina"

      });

      lista.push({
        nombres: "Milagros ",
        apellidos: "Vera Coa",
        email: "vera@seidor.com",
        imagen: "img",
        usuario: "Av. Javier Prado 529 - La Molina"
      });

      lista.push({
        nombres: "Milagros ",
        apellidos: "Vera Coa",
        email: "vera@seidor.com",
        imagen: "img",
        usuario: "Av. Javier Prado 529 - La Molina"
      });

      lista.push({
        nombres: "Milagros ",
        apellidos: "Vera Coa",
        email: "vera@seidor.com",
        imagen: "img",
        usuario: "Av. Javier Prado 529 - La Molina"
      });

      return lista;
    }

  };
});
