// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "jquery.alpha": ["jquery"],
        "jquery.beta": ["jquery"],
        "cookie":["jquery"]
    }
});
// Load the main app module to start the app
requirejs(["app/main"]);
requirejs(["app/context"], function (math){
    alert(math.add(1,1));
    math.youk;
    math.sssj;
});
