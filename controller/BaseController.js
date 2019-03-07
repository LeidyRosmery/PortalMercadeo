sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent"

], function(Controller, History, UIComponent) {
  "use strict";

  return Controller.extend("com.subciber.PortalMercadeo.controller.BaseController", {

    onAfterRendering: function() {
      var alertas = [];
      alertas.push({
        "titulo": "Prueba",
        "descripcion": "prueba descripcion",
        "prioridad": "None",
        "tiempoEnviado": "5 min"
      });
      alertas.push({
        "titulo": "Prueba",
        "descripcion": "prueba descripcion",
        "prioridad": "Low",
        "tiempoEnviado": "2 dias"
      });
      this.getView().getModel("usuarioAlertas").setProperty("/", alertas);
    },
    getRouter: function() {
      try {
        return UIComponent.getRouterFor(this);
      } catch (e) {
        console.error("Error: " + e);
      }
    },

    onNavBack: function() {
      try {
        var oHistory, sPreviousHash;
        oHistory = History.getInstance();
        sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getRouter().navTo("appHome", {}, true /*no history*/ );
        }
      } catch (e) {
        console.error("Error: " + e);
      }
    },
    onPressProfile: function(oEvent) {
      try {
        if (oEvent.getSource().getPressed()) {
          if (!this._oPopoverProfile) {
            this._oPopoverProfile = sap.ui.xmlfragment("com.subciber.PortalMercadeo.view.home.frag.Profile", this);
            this.getView().addDependent(this._oPopoverProfile);
          }
          this._oPopoverProfile.openBy(oEvent.getSource());
        } else {
          this.onCloseProfile();
        }
      } catch (e) {
        console.error("Error: " + e);
      }
    },
    onPressMessages: function(oEvent) {
      try {
        if (oEvent.getSource().getPressed()) {
          if (!this._oPopoverMessage) {
            this._oPopoverMessage = sap.ui.xmlfragment("com.subciber.PortalMercadeo.view.home.frag.Message", this);
            this.getView().addDependent(this._oPopoverMessage);
          }
          this._oPopoverMessage.openBy(oEvent.getSource());
        } else {
          this.onCloseMessage();
        }
      } catch (e) {
        console.error("Error: " + e);
      }

    },
    onCloseProfile: function(oEvent) {
      try {
        this._oPopoverProfile.close();
      } catch (e) {
        console.error("Error: " + e);
      }

    },
    onCloseMessage: function(oEvent) {
      try {
        this._oPopoverMessage.close();
      } catch (e) {
        console.error("Error: " + e);
      }

    },
    onItemClose: function(oEvent) {
      try {
        var oItem = oEvent.getSource(),
          oList = oItem.getParent();
        oList.removeItem(oItem);
      } catch (e) {
        console.error("Error: " + e);
      }
    }

  });

});
