const express = require('express')

class HomeController{
    static index(req,res){
        const viewData ={};
        viewData["title"]="Pokeneas, los parceros de antioquia";
        viewData["text"] = "Bienvenido a Pokeneas";

        res.render("home/index", {viewData:viewData});
    }
}

module.exports = HomeController;