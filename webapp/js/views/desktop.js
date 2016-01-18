/**
 * Created by developer on 17.01.16.
 */


var Desktop = Ractive.extend({
    el:".inner-content",
    oncomplete:function(){

        var ins = this;

        if(Config.starter.newDesk){
            for(var i = 0; i<Config.user.desktop.length; i++){
                if(i === Config.user.desktop.length-1){
                    Config.user.desktop[i].current = true;
                }else{
                    Config.user.desktop[i].current = false;
                }
            }
        }

        ins.set("user.desktop", Config.user.desktop);

        for(var i = 0; i<Config.user.desktop.length; i++){
            var elem = "#panelSim-"+i;
            new Ractive({
                el:elem,
                template:Config.user.desktop[i].template,
                data:Config.user.desktop[i]
            });
        }


        ins.on({
           choose:function(event, j){
               for(var i = 0; i<Config.user.desktop.length; i++){
                   if(i === j){
                       Config.user.desktop[i].current = true;
                   }else{
                       Config.user.desktop[i].current = false;
                   }
               }

               ins.set("user.desktop", Config.user.desktop);
               for(var i = 0; i<Config.user.desktop.length; i++){
                   var elem = "#panelSim-"+i;
                   new Ractive({
                       el:elem,
                       template:Config.user.desktop[i].template,
                       data:Config.user.desktop[i]
                   });
               }
           }
        });
    }
});