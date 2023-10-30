const express = require('express')

export class HomeConroller{
    static index(req,res){
        const viewData ={};
        viewData["title"]="Pokeneas, los parceros de antioquia";
        viewData["text"] = "Bienvenido a Pokeneas"

        res.render();
    }
}