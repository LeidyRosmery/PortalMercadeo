sap.ui.define([], function() {
	"use strict";
	return {
		IdApp: 'Home',
		urlAplicacion:'http://localhost:8888',
		urlLogin:'http://localhost:8888/Login/',
		services: {
			alertas: "http://vivfcons.subciber.com:8080/subciber-configuracion-rest/rest/alertas",
			cerrarSesion: "http://vivfcons.subciber.com:8080/subciber-seguridad-rest/rest/tokens/cerrarsesion"
		}
	};
});
