const express = require('express')
const os = require("os")
const dataBase = require('../DB/PokeneasDB.js')

class PokeneasController{
    information = new dataBase()
    static index(req,res){
        const viewData = {};
        viewData["docker"] = os.hostname();
        const number = Math.floor(Math.random() * 1);
        viewData["pokenea"]=information.dataBase[number];
        return viewData
    }

    static show(req,res){
        const viewData = {};
        viewData["docker"] = os.hostname();
        const number = Math.floor(Math.random() * 1);
        viewData["pokenea"]=information.dataBase[number];
        return viewData
    }
}

module.exports = PokeneasController;