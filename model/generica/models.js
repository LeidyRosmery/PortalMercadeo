sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function(JSONModel, Device) {
  "use strict";

  return {
    modelTablaGenerica:function(){
      var oParam                = {};
      oParam.tablaGenerica      = [];
      oParam.tablaSeleccionada  = {};
      oParam.camposGenerica     = [];
      var oModel                = new JSONModel(oParam);
      return oModel;
    }
  };
});
