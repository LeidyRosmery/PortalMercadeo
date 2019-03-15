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
    usuarioLogeadoModel: function() {
      var oUsuario = {};
      oUsuario.nombre     = "";
      oUsuario.apellido   = "";
      oUsuario.rol        = "";
      oUsuario.imagenUrl  = "";
      oUsuario.usuario    = "";
      oUsuario.grupos     = [];
      oUsuario.accesos    = [];
      var oModel = new JSONModel(oUsuario);
      return oModel;
    },
    usuarioAlertas:function(){
      var oModel = new JSONModel({});
      return oModel;
    },
    utilModel:function(){
      var oParam = {};
      oParam.tituloApp = "";
      var oModel = new JSONModel(oParam);
      return oModel;
    }
  };
});
