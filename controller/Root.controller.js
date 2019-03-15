sap.ui.define([
	"com/subciber/PortalMercadeo/controller/BaseController",
  "com/subciber/PortalMercadeo/model/home/models"
], function (BaseController, models) {
	"use strict";

	return BaseController.extend("com.subciber.PortalMercadeo.controller.Root", {
		onInit: function () {
			try{
				var that = this;
          this.fnObtenerUsuarioLogeado();
					var oRouter = this.getRouter();
					oRouter.attachBypassed(function (oEvent) {
						var sHash = oEvent.getParameter("hash");
						// do something here, i.e. send logging data to the back end for analysis
						// telling what resource the user tried to access...
						//console.log("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
					});
					oRouter.attachRouteMatched(function (oEvent){
						var sRouteName = oEvent.getParameter("name");
						// do something, i.e. send usage statistics to back end
						// in order to improve our app and the user experience (Build-Measure-Learn cycle)
						//$('.headerTitulo span').html(sRouteName.substr(3));
						that.getView().getModel("utilModel").setProperty("/tituloApp", sRouteName.substr(3));
					//	console.log("User accessed route " + sRouteName + ", timestamp = " + new Date().getTime());
					});

      }catch(e){
        console.log(e);
      }
		},
    fnObtenerUsuarioLogeado:function(){
			var that = this;
			try{
         var oUsuarioLocalStore = JSON.parse(localStorage.login);
				 var oUsuarioLogueado   		= that.getView().getModel("usuarioLogeadoModel").getData();
				 oUsuarioLogueado.nombre 		= oUsuarioLocalStore.usuario.nombre;
				 oUsuarioLogueado.apellido 	= oUsuarioLocalStore.usuario.apellido;
				 oUsuarioLogueado.imagenUrl = (oUsuarioLocalStore.usuario.imagenUsuario===null ||
					 															oUsuarioLocalStore.usuario.imagenUsuario==="")? "img/user-log.png" : oUsuarioLocalStore.usuario.imagenUsuario;
				 oUsuarioLogueado.usuario 	= oUsuarioLocalStore.usuario.usuario;
				 oUsuarioLogueado.grupos		= oUsuarioLocalStore.grupoAplicaciones;
				 oUsuarioLogueado.accesos		= oUsuarioLocalStore.accesosRecursos
			}catch(e){
        console.log(e);
      }
    }
	});
});
