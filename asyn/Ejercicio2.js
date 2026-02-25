function getUser() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            let usuario = { id: 5, nombre: "alejo"};
            resolve(usuario);
        }, 1500);
    });
}

function getTasksByUser(userId) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            let tareas = [
                { id: 1, titulo: "hacer tareas", userId: 5 },
                { id: 2, titulo: "hacer oficio", userId: 5 }
            ];
            resolve(tareas);
        }, 1000);
    });
}

async function loadUserTasks() {
    try {
        let usuario = await getUser();
        console.log("Usuario:", usuario.nombre);

        let tareas = await getTasksByUser(usuario.id);
        console.log("Sus tareas:", tareas);
    }  catch (error) {
        console.log("Error:", error);
    }
}

loadUserTasks();