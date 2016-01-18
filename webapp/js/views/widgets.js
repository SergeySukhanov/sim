/**
 * Created by developer on 17.01.16.
 */

var Widgets = Ractive.extend({
    template:$("#widgets").text(),
    el:".inner-content",

    oncomplete:function(){
        var ins = this;

        ins.on({
            addDesktop:function(event, j){
                var list = Config.listWidgets;
                var user = Config.user;
                var current = false;
                for(var i=0; i<Config.user.desktop.length; i++){
                    if(Config.user.desktop[i].current){
                        if(Config.user.desktop[i].widgets.length !== Config.user.desktop[i].count){
                            Config.user.desktop[i].widgets.push(list[j]);
                            i = Config.user.desktop.length + 100;
                            current = true;
                        }
                    }
                }

                if(!current){
                    for(var i=0; i<Config.user.desktop.length; i++){
                        if(Config.user.desktop[i].widgets.length !== Config.user.desktop[i].count){
                            Config.user.desktop[i].widgets.push(list[j]);
                            i = Config.user.desktop.length + 100;
                        }
                    }
                }

                RouterGlobal.navigate("desktop", {trigger:true});

            }
        });
    }
});