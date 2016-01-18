/**
 * Created by developer on 17.01.16.
 */


var Desktops = Ractive.extend({
    template:$("#desktops").text(),
    el:".inner-content",

    oncomplete:function(){
        var ins = this;

        for(var i = 0; i<Config.listDesktops.length; i++){
            var elem = "#desktopItem-"+i;
            new Ractive({
                el:elem,
                template:Config.listDesktops[i].template
            });
        }

        ins.on({
            addDesktop:function(event, i){
                var list = Config.listDesktops;
                var user = Config.user;
                if(!user.desktop.length){
                    list[i].current = true;
                }
                user.desktop.push(list[i]);
                Config.starter.newDesk = true;
                RouterGlobal.navigate("desktop", {trigger:true});
            }
        });
    }
});