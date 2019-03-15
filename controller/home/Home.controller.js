sap.ui.define([
  "com/subciber/PortalMercadeo/controller/BaseController",
  "sap/m/MessagePopover",
  "sap/m/MessageItem",
  "sap/m/MessageToast",
  "sap/m/Link",
  "sap/uxap/ObjectPageLayout",
  "sap/ui/core/UIComponent",
  'sap/ui/model/json/JSONModel',
  "com/subciber/PortalMercadeo/constante/home/Constantes"
], function(BaseController, MessagePopover, MessageItem, MessageToast, Link, ObjectPageLayout, UIComponent, JSONModel, Constantes) {
  "use strict";

  return BaseController.extend("com.subciber.PortalMercadeo.controller.home.Home", {
    onInit: function() {
    },

    onAfterRendering: function() {
 
    },
    onRouteMatched: function(event) {
    }

  });
});
