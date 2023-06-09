'use strict';

const mongoose = require('mongoose');

// Esquema de los anuncios
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    tags: [String],
    
    // Previous uploaded picture: /public/images/anuncios
    // Used by initDB.js
    foto: String,

    // Last uploaded fotos using multer: /public/fotossubidas
    fotosubida: String,

    // Field to store the thumbnail
    thumbnail: String,
});

/**
 * METODOS
 * - ESTATICO: lista(); --> Devuelve una lista de anuncios
 * - ESTATICO: listaTags() --> Devuelve la lista de TAGS disponible
 */

anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
} 

anuncioSchema.statics.listaTags = function() {

    const query = Anuncio.distinct('tags');
    return query.exec();
} 

// Creación modelo de Anuncio
const Anuncio = mongoose.model('Anuncio',anuncioSchema);

// Exportar el modelo
module.exports = Anuncio;