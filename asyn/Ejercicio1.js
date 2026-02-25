function getUsers() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let si = true; 
            
            if (si) {
                let usuarios = [
                    { id: 1, nombre: "Jean" },
                    { id: 2, nombre: "juan" }
                ];
                resolve(usuarios); 
            } else {
                reject("Error al cargar usuarios"); 
            }
        }, 2000); 
    });
}

async function loadUsers() {
    try {
        console.log("Cargando.....");
        let usuarios = await getUsers(); 
        console.log("Usuarios cargados:", usuarios);
    } catch (error) {
        console.log("Algo salio mal:", error); 
    }
}

loadUsers();