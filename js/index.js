
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  //<i class="fas fa-bolt"></i> electrico
  //<i class="fas fa-tint"></i> agua
  //<i class="fas fa-fire"></i> fire
  //<i class="fas fa-leaf"></i> planta
  //<i class="fas fa-star"></i> normal

const pokemones = [];
const CargarTabla =() =>{
  //1. Obtener una referencia en la tabla
  let tbody = document.querySelector("#tabla-tbody");
  //elimin ar todos los elementos que tenga el tbody
  tbody.innerHTML ="";
  //2. Recorrer la lista de pokemones
  for(let i = 0; i < pokemones.length; ++i){
    let p = pokemones[i]
    //3. Por cada pokemon generar una fila(tr)
    let tr = document.createElement("tr")
    //4. Por cada atributo, voy a generar una celda (td)
    let tdNro = document.createElement("td");
    tdNro.innerText =(i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText =p.nombre
    let tdTipo = document.createElement("td");
    let icono = document.createElement("i");
    if (p.tipo == "fuego"){
      icono.classList.add("fas","fa-fire","text-danger","fa-3x");
    }if (p.tipo == "planta"){
      icono.classList.add("fas","fa-leaf","text-success","fa-3x")
    }if (p.tipo == "electrico"){
      icono.classList.add("fas","fa-bolt","text-warning","fa-3x")
    }if (p.tipo == "agua"){
      icono.classList.add("fas","fa-tint","text-primary","fa-3x");
    }if (p.tipo == "normal"){ 
      icono.classList.add("fas","fa-star","text-info","fa-3x")
    }
    tdTipo.classList.add("text-center");
    tdTipo.appendChild(icono);
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML = p.descripcion
    let tdAcciones = document.createElement("td");
    //5. Agregar las celdas al tr
    tr.appendChild(tdNro)
    tr.appendChild(tdNombre)
    tr.appendChild(tdTipo)
    tr.appendChild(tdDesc)
    tr.appendChild(tdAcciones)


    //6. Agregar el tr a la tabla
    tbody.appendChild(tr);
  }
 

};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    //value es para obtener el valor de los input de texto//
    let nombre = document.querySelector("#nombre-txt").value;
    //esto lo saque de la pagina del tinymce, es para obtener lo escrito//
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //checked indica si el radiobuttom esta seleccionado//
    let legendario = document.querySelector("#legendario-si").checked;
    //el tipo se obtiene igual que los input//
    let tipo = document.querySelector("#tipo-select").value;
    
    //como crear un objeto//
    let pokemon ={};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    
    //como guardar en una lista de elementos//
    pokemones.push(pokemon); 
    CargarTabla();
    Swal.fire("Exito!","Pokemon registrado", "info");

} );