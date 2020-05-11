  const store = require('./store')

  function addComentario(comentario){

    return new Promise( function(resolver, rechazar){

      if(!comentario.comentario){
        rechazar('No existe comentario')
        return false
      }

      const nuevoComentario = {
        comentario: comentario.comentario,
        user: comentario.user,
        tipo_publicacion: comentario.tipo_publicacion,
        fecha_reg: new Date()
      }

      store.add(nuevoComentario)
      resolver(nuevoComentario) 

    })

  }

  function getComentario(filter){
      return new Promise((resolver, rechazar)=>{
          resolver(store.List(filter))
      })
  }



  function updateComentario(id, comentario){

    return new Promise((resolver, rechazar)=>{

      if(!id || !comentario){
        rechazar('Datos invalidos')
        return false
      }

      return resolver(store.update(id, comentario))

    })

  }
  

  function deleteComentario(id){
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
    addComentario,
    getComentario,
    updateComentario,
    deleteComentario
  }