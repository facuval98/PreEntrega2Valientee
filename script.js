let nombreUsuario = prompt("Registre su user")
  alert("Te registaste como " + nombreUsuario + "!")
  
  let nombreUsuarioIngresado = prompt("Ingrese user")
  



  let contador = 1

  while (contador < 3) {
    if (nombreUsuario == nombreUsuarioIngresado) {
      break
      
    }
    nombreUsuarioIngresado = prompt("Ingrese user")
    contador++
    
  }

  if (nombreUsuario == nombreUsuarioIngresado && contador <= 3) {
    alert("Bienvenida/o "  +  nombreUsuario + "!")

    

    let cuantoDineroTienes = Number (prompt ( "Cuanto dinero tienes?" )) 

if (cuantoDineroTienes >= 2500) {
  alert("Comprate las Nike re facheritas" + "!")
  }
  else if (cuantoDineroTienes >= 1500) {
    alert("Comprate las Adidas" + "!")
    }

    else if (cuantoDineroTienes >= 1000) {
      alert("Comprate la camperita Nike o adidas" + "!")
      
    }

    else if (cuantoDineroTienes == 900) {
      alert("Comprate la camperita adidas" + "!")
      
    }

    

    else {
      alert ("Lo siento, no te da para nada")
    }

    let mensaje = ("Nuestros productos\n Ingrese el numero de lo que quiera comprar \n1 - Championes Nike $2500\n2 - Championes Adidas $1500\n3 - Campera Nike $1000\n4 - Campera Adidas $900\n5 - No tengo mas plata\n0 - filtrar por categoria")
    let opcion = prompt (mensaje)










  if (opcion == 1 && cuantoDineroTienes >= 2500 && cuantoDineroTienes >= 900) {
    alert ("Gracias por comprar las nike, te quedan de 10 UwU")
   }

    else if (opcion == 1 && cuantoDineroTienes < 2500) {
    alert ( "No tienes suficiente dinero")
    
  }
   
   
   else if (opcion == 2 && cuantoDineroTienes >= 1500 && cuantoDineroTienes >= 900) {
    alert("Gracias por comprar las adidas, estan flama" + "!")
    
  }

  else if (opcion == 2 && cuantoDineroTienes < 1500) {
    alert ( "No tienes suficiente dinero")
    
  }

  else if (opcion == 3 && cuantoDineroTienes >= 1000 && cuantoDineroTienes >= 900) {
    alert("Gracias por comprar la camperita nike, estas de 10" + "!")
    
  }

  else if (opcion == 3 && cuantoDineroTienes < 1000) {
    alert ( "No tienes suficiente dinero")
    
  }


  else if (opcion == 4 && cuantoDineroTienes >= 900 && cuantoDineroTienes >= 900) {
    alert("Gracias por comprar la camperita adidas, que la disfrutes" + "!")
    
  }

  else if (opcion == 4 && cuantoDineroTienes < 900) {
    alert ( "No tienes suficiente dinero")
    
  }


  else if (opcion == 5 && cuantoDineroTienes < 900) {
    alert("Vuelve cuando tengas mas plata pobre" + "!")
    
  }
}







      
  
  else {
    alert ("Intente mas tarde")
    contador = 4
  } 

class Producto {
  constructor (id, nombre, categoria, precio, stock){
    this.id = id
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    this.stock = stock
  }
}


 let products = [
    {
      id: 1,
      nombre: "Championes Nike",
      categoria: ["deportes"],
      precio: 2500,
      stock: 3
    },
    {
      id: 2,
      nombre: "Championes Adidas",
      categoria: ["deportes"],
      precio: 1500,
      stock: 5
    },
    {
      id: 3,
      nombre: "Campera Nike",
      categoria: ["indumentaria"],
      precio: 1000,
      stock: 1
    },
    {
      id: 4,
      nombre: "Campera Adidas",
      categoria: ["indumentaria"],
      precio: 900,
      stock: 8
    },
    
  ]

 
  
  let productos = products.map(product => {
    return new Producto(product.id, product.nombre, product.categoria, product.precio, product.stock)
  })
  
   let categoria = prompt("Ingrese una categoria para filtrar productos\n1 - Deportes\n2 - Indumentaria").toLowerCase() 


// Filtrar y mostrar los productos según la categoría elegida
if (categoria === "1" || categoria === "deportes") {
  let productosDeportes = productos.filter(producto => producto.categoria.includes("deportes"))
  alert("Productos de la categoría Deportes:\n" + productosDeportes.map(p => p.nombre).join("\n"))
}
else if (categoria === "2" || categoria === "indumentaria") {
  let productosIndumentaria = productos.filter(producto => producto.categoria.includes("indumentaria"))
  alert("Productos de la categoría Indumentaria:\n" + productosIndumentaria.map(p => p.nombre).join("\n"))
}
else {
  alert("Categoría inválida.")
}