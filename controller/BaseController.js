sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent",
  "com/subciber/PortalMercadeo/servicio/header/AlertasService",
  "com/subciber/PortalMercadeo/servicio/header/CerrarSesion",
	"com/subciber/PortalMercadeo/constante/home/Constantes"
], function(Controller, History, UIComponent, AlertasService, CerrarSesion, Constantes) {
  "use strict";

  return Controller.extend("com.subciber.PortalMercadeo.controller.BaseController", {

    onAfterRendering: function() {

      try{
        var that        = this;
        var oParam = {};
        AlertasService.alertas(oParam, function(result) {
          if (result.iCode === 1) {
            that.getView().getModel("usuarioAlertas").setProperty("/",result.oResults);
          } else {
            that.getView().getModel("usuarioAlertas").setProperty("/",{});
          }
        }, that);
      }catch(e){
          console.log(e);
      }

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
          this.getRouter().navTo("appInicio", {}, true /*no history*/ );
        }
      } catch (e) {
        console.error("Error: " + e);
      }
    },
    onPressProfile: function(oEvent) {
      try {
        //if (oEvent.getSource().getPressed()) {
          if (!this._oPopoverProfile) {
            this._oPopoverProfile = sap.ui.xmlfragment("com.subciber.PortalMercadeo.view.home.frag.Profile", this);
            this.getView().addDependent(this._oPopoverProfile);
          }
          this._oPopoverProfile.openBy(oEvent.getSource());
        //} else {
        //  this.onCloseProfile();
        //}
      } catch (e) {
        console.error("Error: " + e);
      }
    },
    onPressMessages: function(oEvent) {
      try {
        //if (oEvent.getSource().getPressed()) {
          if (!this._oPopoverMessage) {
            this._oPopoverMessage = sap.ui.xmlfragment("com.subciber.PortalMercadeo.view.home.frag.Message", this);
            this.getView().addDependent(this._oPopoverMessage);
          }
          this._oPopoverMessage.openBy(oEvent.getSource());
        //} else {
        //  this.onCloseMessage();
        //}
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
    },
    onExit: function() {
      try{

          var that            = this;
          var oParam          = {};
          var datosLogueado   = JSON.parse(localStorage.login);
  				oParam.tokens       = datosLogueado.usuario.tokenUsuario;
          CerrarSesion.cerrarSesion(oParam, function(result) {
            if (result.iCode === 1) {
               console.log("Usuario Eliminado");
            } else {
              console.log(result);
            }
            localStorage.clear();
             if (that._oPopoverProfile) {
               that._oPopoverProfile.destroy();
             }
             if (that._oPopoverMessage) {
               that._oPopoverMessage.destroy();
             }
            window.location.href = Constantes.urlLogin;
          }, that);

      }catch(e){
        console.error("Error: "+e);
      }

    }

  });

});
