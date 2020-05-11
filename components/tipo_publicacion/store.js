const model = require('./model')

// Agregar datos //
function addTipoPublicacion(tipo){
    const obj = new model(tipo)
    obj.save()
}

// Listar datos //
async function getTipoPublicacion(){

    return new Promise( async(resolver, rechazar)=>{
        //return list

            resolver(model.find())

    })
    
}


async function updateUser(id, name){
    const find_user = await model.findOne({_id: id})
    find_user.name = name
    return find_user.save()
}

async function deleteUser(id){
    return await model.deleteOne({_id: id})
}

module.exports = {
    add: addTipoPublicacion,
    List: getTipoPublicacion,
    update: updateUser,
    delete: deleteUser
}
