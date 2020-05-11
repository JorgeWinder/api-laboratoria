  const store = require('./store')
  
  function addUser(user){

    return new Promise( function(resolver, rechazar){

      if(!user.nombre){
        rechazar('No existe nombre')
        return false
      }

      const nuevoUser = {
        _id: user.correo,
        nombre: user.nombre,
        password: user.password,
        date: new Date()
      }

      store.add(nuevoUser)
      resolver(nuevoUser) 

    })
  }

  function getUser(filter){
      return new Promise((resolver, rechazar)=>{
          resolver(store.List(filter))
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
    addUser,
    getUser,
    updateUser,
    deleteUser
  }