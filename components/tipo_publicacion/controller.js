  const store = require('./store')

  function addTipoPublicacion(TipoPublicacion){

    return new Promise( function(resolver, rechazar){

      if(!TipoPublicacion.descripcion){
        rechazar('No existe comentario')
        return false
      }

      const nuevoTipoPublicacion = {
        descripcion: TipoPublicacion.descripcion,
        date: new Date()
      }

      store.add(nuevoTipoPublicacion)
      resolver(nuevoTipoPublicacion) 

    })

  }

  function getTipoPublicacion(){
      return new Promise((resolver, rechazar)=>{
          resolver(store.List())
      })
  }

  function updateMensaje(id, mensaje){

    return new Promise((resolver, rechazar)=>{

      if(!id || !mensaje){
        rechazar('Datos invalidos')
        return false
      }

      return resolver(store.update(id, mensaje))

    })

  }

  function updateUser(id, name){

    return new Promise((resolver, rechazar)=>{

      if(!id || !name){
        rechazar('Datos invalidos')
        return false
      }

      return resolver(store.update(id, name))

    })

  }
  

  function deleteUser(id){
    return new Promise((resolver, rechazar)=>{

        if(!id){
          rechazar('Id invalido')
          return false
        }

        store.delete(id)
        .then((data)=>{
          resolver()
        })
        .catch((data)=>{
          rechazar()
        })
      

    })
  }

  module.exports = {
    addTipoPublicacion,
    getTipoPublicacion,
    updateUser,
    deleteUser
  }