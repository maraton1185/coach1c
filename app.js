const port = 3001;

const express = require("express");
const hbs = require("hbs");
const exHbs = require("express-handlebars"); 
const app = express();
const attr = require("./menu.js");
//console.log(Menu);
//let attr = new Menu();
//console.log(attr);

hbs.registerPartials(__dirname + "/views/partials");
app.set('views', __dirname + '/views');
app.set("view engine", "html");
app.engine('html', require('hbs').__express);
app.engine("html", exHbs(
    {
        layoutsDir: __dirname + "/views/layouts", 
        defaultLayout: "layout",
        extname: "html",
        helpers:{    
            currentMonth: function(arg, options) {
                
				d = new Date();
				monthA = 'январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь'.split(',');
				return monthA[d.getMonth()]
				
            },
			nextMonth: function(arg, options) {
                d = new Date();
				monthA = 'январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь'.split(',');
				i = d.getMonth();
				i = i== 11 ? 0 : i+1;
				return monthA[i];
            }
        }
    }
));

app.use("/app", function(request, response){     
    response.redirect(301, "https://app446601.1capp.net/InterbookWebApp/ru/");    
});
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){  
    attr.setActive("/");   
    response.render("home", attr);    
});

app.get("/content", function(request, response){
    attr.setActive("/content");   
    response.render("content", attr);   
});

app.get("/price", function(request, response){
    attr.setActive("/price");   
    response.render("price", attr);   
});

app.get("/ownpath", function(request, response){
    attr.setActive("/ownpath");   
    response.render("ownpath", attr);   
});

app.get("/reviews", function(request, response){
    attr.setActive("/reviews");   
    response.render("reviews", attr);   
});

app.get("/faq", function(request, response){
    attr.setActive("/faq");   
    response.render("faq", attr);   
});

app.get("/about", function(request, response){
    attr.setActive("/about");   
    response.render("about", attr);   
});

app.get("/links", function(request, response){
    attr.setActive("/links");   
    response.render("links", attr);   
});

app.get("/subscription", function(request, response){
    attr.setActive("/subscription");   
    response.render("subscription", attr);   
});

app.listen(port);