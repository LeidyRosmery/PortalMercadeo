sap.ui.define([
], function() {
	"use strict";
	return {
	 	generarIdTransaccion: function() {
			var fecha = new Date();
			var fechaIso = fecha.toISOString();
			var fechaString = fechaIso.toString().replace(/:/g, "").replace(/-/g, "").replace(".", "").replace("Z", "").replace("T", "");
			var randon = Math.floor((Math.random() * 1000000) + 1);
			var idTransaccion = fechaString + "" + randon;
			return idTransaccion;
		},
			generarHeaders: function(context, appId) {
				var request = {};
				request.transaccionId = this.generarIdTransaccion();
				request.aplicacion = appId;
				request.tokens = (localStorage.login === undefined || localStorage.login === "") ? "x" : JSON.parse(localStorage.login).usuario.tokenUsuario;
				request.terminal = "127.0.0.1";
			return request;
		},
		actualizarToken:function(nuevoToken){
			try{
				var datos = JSON.parse(localStorage.login);
				datos.usuario.tokenUsuario = nuevoToken;
				localStorage.login = JSON.stringify(datos);
			}catch(e){
				console.log(e);
			}
		},
		httpGet: function(path, appId, callback, context) {
			var that = this;
			var oHeader = this.generarHeaders(context, appId);
		 $.ajax({
				url: path,
				method: "GET",
				headers: oHeader,
				contentType: "application/json",
				beforeSend: function(){
					sap.ui.core.BusyIndicator.show(0);
				},
				success: function(result,status,xhr) {
					that.actualizarToken(xhr.getResponseHeader("tokens"));
					return callback(result);
				},
				error: function(error) {
				 if(error.status === 401){
						localStorage.clear();
						window.location.reload();
					}
					return callback({
						oAuditResponse: {
							sIdTransaccion: oHeader.sIdTransaccion,
							iCode: -1000,
							sMensaje: 'Error al consultar el servicio (' + error.status + '), vuelva a intentarlo o comuníquese con el área de soporte.'
						}
					});
				},
				complete: function(){
		    	sap.ui.core.BusyIndicator.hide();
		   }
			});

		},
		httpPost: function(path, data,appId, callback, context) {
			var that = this;
			var oHeader = this.generarHeaders(context, appId);
		 $.ajax({
				url: path,
				method: "POST",
				headers: oHeader,
				data: JSON.stringify(data),
				contentType: "application/json",
				beforeSend: function(){
					sap.ui.core.BusyIndicator.show(0);
				},
				success: function(result,status,xhr) {
					that.actualizarToken(xhr.getResponseHeader("tokens"));
					return callback(result);
				},
				error: function(error) {
				 if(error.status === 401){
						localStorage.clear();
						window.location.reload();
					}
					return callback({
						oAuditResponse: {
							sIdTransaccion: oHeader.sIdTransaccion,
							iCode: -1000,
							sMensaje: 'Error al consultar el servicio (' + error.status + '), vuelva a intentarlo o comuníquese con el área de soporte.'
						}
					});
				},
				complete: function(){
		    	sap.ui.core.BusyIndicator.hide();
		   }
			});

		},
		httpPut: function(path, data, callback, context) {
			var oHeader = this.generarHeaders(context);
			$.ajax({
				url: path,
				method: "PUT",
				headers: oHeader,
				data: JSON.stringify(data),
				contentType: "application/json charset=utf-8",
				success: function(result) {
					return callback(result);
				},
				error: function(error) {
					if(error.status === 401){
						localStorage.clear();
						window.location.reload();
					}
					return callback({
						oAuditResponse: {
							sIdTransaction: oHeader.sIdTransaction,
							iCode: -1000,
							sMensaje: 'Error al consultar el servicio (' + error.status + '), vuelva a intentarlo o comuníquese con el área de soporte.'
						}
					});
				}
			});
		}
	};
});
