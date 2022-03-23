const multiLib = require("multi-lib/library");

//region converters

const converter = multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"converter",[
    /*default form for each recipes. You can change values.
    {
        input:{
            items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
            liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
            power:0,
        },
        output:{
            items:[],
            liquids:[],
            power:0,
        },
        craftTime:80,
    },*/
    {
        input: {
            items: ["altanic-ironore/1"],
        },
        output: {
            items: ["mein-content-iron/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["mein-content-iron/1"],
        },
        output: {
            items: ["altanic-ironore/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["mein-content-steel/1"],
        },
        output: {
            items: ["altanic-stal/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["altanic-stal/1"],
        },
        output: {
            items: ["mein-content-steel/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["altanic-sulfur/1"],
        },
        output: {
            items: ["mein-content-sulfur/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["mein-content-sulfur/1"],
        },
        output: {
            items: ["altanic-sulfur/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["mein-content-sulfur/1"],
        },
        output: {
            items: ["z.p.g.m._mod-siarka/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["z.p.g.m._mod-siarka/1"],
        },
        output: {
            items: ["mein-content-sulfur/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["z.p.g.m._mod-siarka/1"],
        },
        output: {
            items: ["altanic-sulfur/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["altanic-sulfur/1"],
        },
        output: {
            items: ["z.p.g.m._mod-siarka/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["altanic-uranium/1"],
        },
        output: {
            items: ["z.p.g.m._mod-uran/1"],
        },
        craftTime: 1
    },
    {
        input: {
            items: ["z.p.g.m._mod-uran/1"],
        },
        output: {
            items: ["altanic-uranium/1"],
        },
        craftTime: 1
    },
],{
    /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){
    /*you can use customUpdate=function(){}. this function excuted before update()
    also this.draw=function(){}
    you can customize entity here.
    ex)
    this._myProp=0;
    this.getMyProp=function(){
        return this._myProp;
    };
    this.setMyProp=function(a){
        this._myProp=a;
    };*/
});
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
converter.localizedName = "Konweter";
converter.description = "Konwertuje przedmioty z innych modów";
converter.itemCapacity = 30;
converter.liquidCapacity = 20;
converter.size = 1;
converter.health = 50;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
converter.dumpToggle = true;

//region crafters

const botler = multiLib.MultiCrafter(GenericCrafter,GenericCrafter.GenericCrafterBuild,"botler",[
    /*
    Loading template
    {
        input: {
            items: ["/12"],
            liquids: ["/180"],
            power: 1.5,
        },
        output: {
            items: ["/12"],
        },
        craftTime: 60
    },
    Unloading template
    {
        input: {
            items: ["/12"],
            power: 1.5,
        },
        output: {
            items: ["/12"],
            liquids: ["/12"],
        },
        craftTime: 60
    },
    */
    //Loading
	{
		input: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["water/180"],
			power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelkaw/12"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["cryofluid/180"],
			power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelkal/12"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["oil/180"],
			power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelkar/12"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["slag/180"],
			power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelkaz/12"],
		},
		craftTime: 60
	},
    //Unloading
	{
		input: {
		items: ["z.p.g.m._mod-butelkaw/12"],
		power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["water/180"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelkal/12"],
			power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["cryofluid/180"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelkar/12"],
			power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["oil/180"],
		},
		craftTime: 60
	},
	{
		input: {
			items: ["z.p.g.m._mod-butelkaz/12"],
			power: 1.5,
		},
		output: {
			items: ["z.p.g.m._mod-butelka/12"],
			liquids: ["slag/180"],
		},
		craftTime: 60
	},
],{
    /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
function Extra(){
    /*you can use customUpdate=function(){}. this function excuted before update()
    also this.draw=function(){}
    you can customize entity here.
    ex)
    this._myProp=0;
    this.getMyProp=function(){
        return this._myProp;
    };
    this.setMyProp=function(a){
        this._myProp=a;
    };*/
});
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
botler.localizedName = "Pakownik";
botler.description = "Pakuje ciecze do przedmiotów";
botler.itemCapacity = 10;
botler.liquidCapacity = 60;
botler.size = 2;
botler.health = 500;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
botler.dumpToggle = true;
botler.requirements(Category.liquid,ItemStack.with(Items.copper, 30, Items.lead, 45, Items.zelazo, 75, Items.silicon, 15, Items.metaglass, 75)); //Ciekawe czy zadziała