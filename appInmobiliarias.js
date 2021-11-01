const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "tu nombre aquí";
const tema = "el tema que te tocó";

const departamentosExternos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
const inmobiliaria = {
  departamentos: departamentosExternos,

// B
listarDepartamentos = function (arrayExterno) {
  for (let i = 0; i <arrayExterno.length; i++){
    let estadoDepartamento = arrayExterno[i].disponible ? "disponible":"alquilado";
    /* if (arrayExterno[i].disponible == true){
      estadoDepartamento "disponible"
    }else{
      estadoDepartamento "alquilado"
    }*/
    let petFriendly = arrayExterno[i].aceptaMascotas ? "es copado":"es mala onda";  
    console.log(`id: ${arrayExterno[i].id}, precio : ${arrayExterno[i].precioAlquiler}, esta: ${estadoDepartamento}, ${arrayExterno[i].cantidadHabitaciones} habitaciones, maximo ${arrayExterno[i].cantidadPersonas} personas, ${petFriendly} con las mascotas, los propietarios son: ${arrayExterno[i].propietarios} `);
  }
},

// C
 departamentosDisponibles : function () {
   let listaDisponibles = []
   for (let i = 0; i <this.departamentos.length; i++){
     if (this.departamentos[i].disponible) {
          listaDisponibles.push (this.departamentos[i])
     }
  }
   return listaDisponibles;
},
// D
buscarPorId : function (idBuscado) {
  for (let i = 0; i <this.departamentos.length; i++){
    if (this.departamentos[i].id == idBuscado) {
         return this.departamentos[i]
    }
 }
  return "no existe tal departamento papa frita";
},


// E
buscarPorPrecio : function (precio) {
  let deptosDisponibles = this.departamentosDisponibles()
  let dptosAptos = []
  for (let i = 0; i <deptosDisponibles.length; i++){
    if (deptosDisponibles[i].puntaje <= precio) {
         dptosAptos.push(this.depatamentos[i])
    }
 }
 return dptosAptos
},
// F

precioConImpuesto: function (porcentaje) {
  for (let i = 0; i < this.departamentos.length; i++){
    this.departamentos[i].precioAlquiler = this.departamentos[i].precioAlquiler * (porcentajeAumento / 100 + 1)
  }
  return this.departamentos
},
// G

simplificarPropietarios: function () {
  for (let i = 0; i < this.departamentos.length; i++){
    let losPropietarios = this.departamentos[i].propietarios//propietarios: "Dueño: Luis"
    let desde = losPropietarios.indexOf(':')//5
    let soloPropietarios = losPropietarios.slice(desde) // "": Luis Perez"
    this.departamentos[i].propietarios = "Prop." + soloPropietarios// Prop: Luis Perez
  }
  return this.departamentos;
  
},

}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
inmobiliaria.listarDepartamentos (departamentosExternos);
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
console.log(inmobiliaria.departamentosDisponibles);

console.log(o);

console.log(v, oo + " D. buscarPorId");
console.log(inmobiliaria.buscarPorId(1));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
console.log(inmobiliaria.buscarPorPrecio());
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
console.log(inmobiliaria.precioConImpuesto());
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
console.log(inmobiliaria.simplificarPropietarios());
console.log(o);
