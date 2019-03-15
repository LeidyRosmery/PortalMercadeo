sap.ui.define([], function() {
	"use strict";
	return {
		IdApp: 'Generica',
		services: {
			consultarTablaGenerica: "http://vivfcons.subciber.com:8080/subciber-configuracion-rest/rest/maestra/tablas",
			consultarCampoGenerica: "http://vivfcons.subciber.com:8080/subciber-configuracion-rest/rest/maestra/tablas/{0}/campos"
		}
	};
});
