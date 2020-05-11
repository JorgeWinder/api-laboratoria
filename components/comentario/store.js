const model = require('./model')

// Agregar datos //
function addComentario(comentario){
    // const objComentario = new model(comentario)
    // objComentario.save()

    model.collection.insertOne(comentario)
}

// Listar datos //
async function getComentario(filter){

    return new Promise( async(resolver, rechazar)=>{
        //return list
            let filter = {}
            console.log(filter)

            if(filter !== null){
                filter = { user: filter}
            }

            resolver(model.find({}).sort({fecha_reg: -1}))

    })
    
}


async function updateComentario(id, comentario){
    const find_user = await model.findOne({_id: id})
    find_user.comentario = comentario
    return find_user.save()
}

async function deleteComentario(id){
    return await model.deleteOne({_id: id})
}

module.exports = {
    add: addComentario,
    List: getComentario,
    update: updateComentario,
    delete: deleteComentario
}
