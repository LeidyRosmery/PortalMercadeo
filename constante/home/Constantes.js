sap.ui.define([], function() {
	"use strict";
	return {
		IdApp: 'Login',
		urlAplicacion:'http://localhost:8888',
		urlLogin:'http://localhost:8888/Login/',
		services: {
			login: "http://localhost:8088/subciber-seguridad-rest/rest/autenticacion"
		}
	};
});
