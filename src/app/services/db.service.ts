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

  delete_producto(producto){
    let clave = producto.clave;
    var retrievedObject = localStorage.getItem('database');
    var db = JSON.parse(retrievedObject);
    let fw = db.productos.indexOf(producto);
    let ch;
    console.log(clave);

    for(let i=0; i<db.productos.length; i++){
      if(db.productos[i]['costo'] == clave){
        ch = i;
      }
    }
    console.log(ch);
    db.productos.splice(ch,1);//lo elimine

   
   /* console.log(fw);
    console.log(fw.costo);
    if(fw.costo == 0){*/
      //db.productos.splice(fw,1);//lo elimine
    /*}
    else{ 
      alert('No se puede eliminar este producto');
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