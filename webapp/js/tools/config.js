/**
 * Created by developer on 17.01.16.
 */

var Config = {
    routers: {},
    views: {},
    models: {},
    collections: {},

    account:false,

    starter:{
        newDesk:false
    },

    methods:{
        tmplReturn:function(template, id){
            var elem = "#panelSim-"+(id);
            new Ractive({
                el:elem,
                template:template
            });
        }
    },

    user:{
      desktop:[

      ]
    },

    listWidgets:[
        {
            source:"../../images/widget1.jpg",
            name:"Widget1"
        },
        {
            source:"../../images/widget2.jpg",
            name:"Widget2"
        },
        {
            source:"../../images/widget3.png",
            name:"Widget3"
        },
        {
            source:"../../images/widget4.gif",
            name:"Widget4"
        }
    ],

    listDesktops:[
        {
            template:"#template1",
            current:false,
            count:2,
            widgets:[

            ]
        },
        {
            template:"#template2",
            current:false,
            count:5,
            widgets:[

            ]
        },
        {
            template:"#template3",
            current:false,
            count:4,
            widgets:[

            ]
        },
        {
            template:"#template4",
            current:false,
            count:6,
            count:6,
            widgets:[

            ]
        }
    ]
}