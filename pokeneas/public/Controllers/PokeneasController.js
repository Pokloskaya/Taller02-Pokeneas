const express = require('express')
const os = require("os")
const dataBase = require('../DB/PokeneasDB.js')


export class PokeneasController{
    information = dataBase()
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