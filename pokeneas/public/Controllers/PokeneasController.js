const express = require('express');
const os = require("os");
const dataBase = require('../db/PokeneasDB');

class PokeneasController{
    
    static index(req,res){
        const viewData = {};
        viewData["docker"] = os.hostname();
        const number = Math.floor(Math.random() * 8);
        viewData["pokenea"]=dataBase.database[number];
        res.render("pokenea/index", {viewData:viewData});
    }

    static show(req,res){
        const viewData = {};
        viewData["docker"] = os.hostname();
        const number = Math.floor(Math.random() * 8);
        viewData["pokenea"]=dataBase.database[number];
        viewData["image"]=dataBase.database[number].image;
        res.render("pokenea/show", {viewData:viewData});
    }
}

module.exports = PokeneasController;