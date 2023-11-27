const usersStart = [{
    fullname: 'John Doe',
    age: 30,
    email: 'admin@admin.com',
    id: '1',
    active: true,
    password: 'admin',
    bornDate: 725846400000,
    location: 'Mendoza',
    image: 'https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp',
    role: 'ADMIN'
},
{
    fullname: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com',
    id: '2',
    active: false,
    password: 'password456',
    bornDate: new Date('1998-05-05').getTime(),
    location: 'Mendoza',
    image: 'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg',
    role: 'CLIENT'
},
{
    fullname: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    id: '3',
    active: true,
    password: 'password789',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'Mendoza',
    image: 'https://media.gq.com.mx/photos/640f3efd5b759e424e0f463d/master/w_2560%2Cc_limit/premios%2520oscar%25202023%2520broches%2520hombre.jpg'
}]

if (localStorage.getItem("users") === null) {

    localStorage.setItem("users", JSON.stringify(usersStart))

}

const productStart = [{
    imagen:'/assets/img/bife-de-chorizo.jpg',
    producto:'Bife De Chorizo',
    descripcion:`Corte del cuarto trasero, muy reconocido por su sabor y bajo contenido de grasa.`,
    precio: '4.999',
    fecha: new Date('2023-09-05').getTime(),
    id:'1',
},{
    imagen:'/assets/img/vacio_2.jpg',
    producto:'Vacio',
    descripcion:` Uno de los tres cortes parrilleros preferidos por el consumidor argentino`,
    precio: '3.990',
    fecha: new Date('2023-09-06').getTime(),
    id:'2',
},{
    imagen:'/assets/img/colita_1.jpg',
    producto:'Colita De Cuadril',
    descripcion:` Corte del cuarto trasero, muy reconocido por su sabor y bajo contenido de grasa.`,
    precio: '5.200',
    fecha: new Date('2023-09-07').getTime(),
    id:'3',
},{
    imagen:'/assets/img/cuadril_4.jpg',
    producto:'Cuadril',
    descripcion:` Por su versatilidad y terneza es un corte ideal para preparar bifes y recetas al horno.`,
    precio: '3.900',
    fecha: new Date('2023-09-08').getTime(),
    id:'4',
},{
    imagen:'/assets/img/entra_a_1.jpg',
    producto:'Entraña',
    descripcion:` Por su versatilidad y terneza es un corte ideal para preparar bifes y recetas al horno.`,
    precio: '5.990',
    fecha: new Date('2023-09-10').getTime(),
    id:'5',
},{
    imagen:'/assets/img/milanesa.jpg',
    producto:'Milanesas De Carne',
    descripcion:`Se usan los cortes adecuados para cada tipo de milanesa.`,
    precio: '2.990',
    fecha: new Date('2023-09-11').getTime(),
    id:'6',
},{
    imagen:'/assets/img/osobuco_1.jpg',
    producto:'Osobuco',
    descripcion:`Favorito en la cocina argentina para pucheros y guisos..`,
    precio: '2.700',
    fecha: new Date('2023-09-12').getTime(),
    id:'7',
},{
    imagen:'/assets/img/picada.jpg',
    producto:'Picada Premium',
    descripcion:` Picada vacuna desgrasada`,
    precio: '3.200',
    fecha: new Date('2023-09-13').getTime(),
    id:'8',
}

]
if (localStorage.getItem("products") === null) {

    localStorage.setItem("products", JSON.stringify(productStart))

}