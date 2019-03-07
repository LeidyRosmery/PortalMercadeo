sap.ui.define([], function() {
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
      request.tokens = (localStorage.login === undefined || localStorage.login === "") ? "x" : JSON.parse(localStorage.login).token;
      request.terminal = "127.0.0.1";
      return request;
    },
    httpPost: function(path, data, appId, callback, context) {
      var oHeader = this.generarHeaders(context, appId);
      $.ajax({
        url: path,
        method: "POST",
        headers: oHeader,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(result) {
          return callback(result);
        },
        error: function(error) {
          return callback({
            oAuditResponse: {
              sIdTransaccion: oHeader.sIdTransaccion,
              iCode: -1000,
              sMensaje: 'Error al consultar el servicio (' + error.status + '), vuelva a intentarlo o comuníquese con el área de soporte.'
            }
          });
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
          return callback({
            oAuditResponse: {
              sIdTransaction: oHeader.sIdTransaction,
              iCode: -1000,
              sMensaje: 'Error al consultar el servicio (' + error.status + '), vuelva a intentarlo o comuníquese con el área de soporte.'
            }
          });
        }
      });
    },
    validarRespuestaServicio: function(oAuditResponse, mensaje2) {
      if (oAuditResponse.iCode === 1) {
        utilPopUps.onMessageSuccessDialogPress(oAuditResponse.sIdTransaction, mensaje2);
      } else if (oAuditResponse.iCode === 200) {
        utilPopUps.onMessageWarningDialogPressExit(oAuditResponse.sIdTransaction, mensaje2);
      } else if (oAuditResponse.iCode > 1) {
        //var mensaje = oAuditResponse.sMessage;
        utilPopUps.onMessageWarningDialogPress2(oAuditResponse.sIdTransaction, mensaje2);
      } else if (oAuditResponse.iCode === 0) {
        utilPopUps.onMessageErrorDialogPress(oAuditResponse.sIdTransaction);
      } else {
        utilPopUps.onMessageErrorDialogPress(oAuditResponse.sIdTransaction);
      }
    },
  };
});
