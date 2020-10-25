import { Injectable } from '@angular/core';
import { Cliente, Producto } from '../models/schemadb';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  producto:Producto;

  
  constructor() {

   }

  get_clientes():Cliente[]{
    let retrievedObject = localStorage.getItem('database');
    console.log('get_clientes');
    console.log(retrievedObject);
    return JSON.parse(retrievedObject).clientes;
  }

  get_productos():Producto[]{
    let retrievedObject = localStorage.getItem('database');
    console.log('get_prodctos');
    console.log(retrievedObject);
    return JSON.parse(retrievedObject).productos;
  }

  create_cliente(cliente){
    var retrievedObject = localStorage.getItem('database');
    var db =  JSON.parse(retrievedObject);
    db.clientes.push(cliente);
    localStorage.setItem('database', JSON.stringify(db));

  }  

  create_producto(producto){
    var retrievedObject = localStorage.getItem('database');
    var db =  JSON.parse(retrievedObject);
    db.productos.push(producto);
    localStorage.setItem('database', JSON.stringify(db));
  }  

  delete_producto(producto:Producto){
    var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);
    for(let prod of db.productos){
      if(prod.clave == producto.clave){
        const index = db.productos.indexOf(prod,0);
        if(index > -1){
          db.productos.splice(index,1);
        }
      }

    }

    /*var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);

    for(let i=0; db.productos.length; i++){
      if(producto == db.productos[i]){
        db.productos.splice(i,1);
      }
    }*/
  
    localStorage.setItem('database', JSON.stringify(db));
  }

  show_producto_form(producto){
    var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);
    let fw = db.productos.indexOf(producto);
    db.productos.splice(fw,1);
    localStorage.setItem('database', JSON.stringify(db));
  }

}
