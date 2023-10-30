const express = require('express')
const os = require("os")
const dataBase = require('../db/PokeneasDB.js')

export class PokeneasController{
    static index(req,res){
        const viewData = {};
        viewData["docker"] = os.hostname();
        const number = Math.floor(Math.random() * 1);
        viewData["pokenea"]=dataBase[number];
    }

    static show(req,res){
        const viewData = {};
        viewData["docker"] = os.hostname();
        const number = Math.floor(Math.random() * 1);
        viewData["pokenea"]=dataBase[number];
    }
}