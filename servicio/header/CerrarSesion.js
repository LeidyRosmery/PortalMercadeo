sap.ui.define([
	"com/subciber/PortalMercadeo/util/base/UtilResponse",
	"com/subciber/PortalMercadeo/util/base/UtilHttp",
	"com/subciber/PortalMercadeo/constante/home/Constantes"
], function(UtilResponse, UtilHttp, Constantes) {
	"use strict";
	return {
		cerrarSesion: function(oParam, callback,context) {
			UtilHttp.httpPost(Constantes.services.cerrarSesion, oParam, Constantes.IdApp, function(result) {
				var oAuditResponse = result;
				if (oAuditResponse.codigoRespuesta === 1) {
					callback(UtilResponse.success(oAuditResponse.mensajeRespuesta, result.objectResponse));
				} else if (oAuditResponse.codigoRespuesta > 1) {
					callback(UtilResponse.warn(oAuditResponse.mensajeRespuesta, result.objectResponse));
				} else if (oAuditResponse.codigoRespuesta < 0 && oAuditResponse.codigoRespuesta !== -1000) {
					callback(UtilResponse.error(oAuditResponse.mensajeRespuesta, result.objectResponse));
				} else if (oAuditResponse.codigoRespuesta === -1000) {
					callback(UtilResponse.exception(oAuditResponse.mensajeRespuesta));
				}
			}, context);
		}
	};
});
