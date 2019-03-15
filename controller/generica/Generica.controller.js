sap.ui.define([
	"com/subciber/PortalMercadeo/controller/BaseController",
	"com/subciber/PortalMercadeo/servicio/generica/TablaGenericaService",
	"com/subciber/PortalMercadeo/servicio/generica/CampoGenericaService",
	"com/subciber/PortalMercadeo/model/generica/models"
], function (BaseController, TablaGenericaService, CampoGenericaService, models) {
	"use strict";
	return BaseController.extend("com.subciber.PortalMercadeo.controller.generica.Generica", {
		onInit: function (oEvent) {
			this.getView().setModel(models.modelTablaGenerica(), "modelTablaGenerica");
		},
    onAfterRendering: function() {
			try{
        var that        = this;
        var oParam 			= {};
        TablaGenericaService.consultarTablaGenerica(oParam, function(result) {
 					if(result.iCode === 1){
						that.getView().getModel("modelTablaGenerica").setProperty("/tablaGenerica", result.oResults.tablaGenerica);
					}else{
						that.getView().getModel("modelTablaGenerica").setProperty("/tablaGenerica", []);
					}
        }, that);
      }catch(e){
          console.log(e);
      }
    },
		onSelectMaestro:function(oEvent){
			try{
        var that        				= this;
				var oSeleccionado				= oEvent.getSource().getSelectedItem().getBindingContext("modelTablaGenerica");
				var oTablaSeleccionada 	= this.getView().getModel("modelTablaGenerica").getProperty(oSeleccionado.sPath);
				that.getView().getModel("modelTablaGenerica").setProperty("/tablaSeleccionada", oTablaSeleccionada);
				var oParam 							= {};
				oParam.codigoTabla			= oTablaSeleccionada.codigoTabla;
        CampoGenericaService.consultarCampoGenerica(oParam, function(result) {
 					 	if(result.iCode === 1){
							that.getView().getModel("modelTablaGenerica").setProperty("/camposGenerica", result.oResults.campoGenerica);
						}else{
							that.getView().getModel("modelTablaGenerica").setProperty("/camposGenerica", []);
						}
        }, that);
				var oSplitApp	=	this.getView().byId("SplitAppMatestros");
				var detalleOK	=	this.getView().byId("detail").getId();
				oSplitApp.toDetail(detalleOK);
      }catch(e){
          console.log(e);
      }
		}
	});
});
