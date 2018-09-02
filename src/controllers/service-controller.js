'use strict'

const mongoose = require('mongoose');
const Service = mongoose.model('Service');

exports.post = (req, res, next) => {
    var service = new Service(req.body);

    /*
    service.title = req.body.title;
    service.description = req.body.description;
    service.price = req.body.price;
    service.time = req.body.time;
    service.active = req.body.active;
    */

    service.save().then(x => {
        res.status(201).send({
            menssage: 'Serviço cadastrado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            menssage: 'Falha ao cadastrar o serviço!', data: e
        });
    });

};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
