sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/subciber/PortalMercadeo/model/home/models",
	"com/subciber/PortalMercadeo/model/usuario/models",
  "com/subciber/PortalMercadeo/constante/home/Constantes"
], function (UIComponent, Device, models, modelUsuario, Constantes) {
	"use strict";

	return UIComponent.extend("com.subciber.PortalMercadeo.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			sap.ui.core.BusyIndicator.show(0)
			if(localStorage.login === undefined){
				window.location.href = Constantes.urlLogin;
			} 
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			// enable routing
			this.getRouter().initialize();
					// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.setModel(models.usuarioLogeadoModel(), "usuarioLogeadoModel");
			this.setModel(models.usuarioAlertas(), "usuarioAlertas");
			this.setModel(models.utilModel(), "utilModel");
			this.setModel(modelUsuario.usuarioAdd(), "usuarioAdd");
		}
	});
});
