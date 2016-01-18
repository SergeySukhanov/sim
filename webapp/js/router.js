/**
 * Created by developer on 17.01.16.
 */


var Router = Backbone.Router.extend({
    routes:{
        "":"desktop",
        "desktop":"desktop",
        "desktops":"desktops",
        "widgets":"widgets"
    },

    desktop:function(){

        new Desktop({
            template:"#desktop",
            data:Config
        });
    },

    desktops:function(){
        new Desktops({
            template:"#desktops",
            data:Config
        });
    },

    widgets:function(){
        new Widgets({
            template:"#widgets",
            data:Config
        });
    },

    initialize:function(){
        new Layout({
            template:"#layout",
            data:Config
        });
    }
});