function login(email, password) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let emailCorrecto = "jean@correo.com";
            let passCorrecta = "83733";

            if(email === emailCorrecto && password === passCorrecta) {
                resolve("Login exitoso");
            } else {
                reject("datos incorrectos");
            }
        }, 2000);
    });
}

async function startLogin() {
    let email = "jean@correo.com";
    let password = "83733";

    try {
        console.log("Analizando...");
        let mensaje = await login(email, password);
        console.log("✅", mensaje);
    } catch (error) {
        console.log("❌", error);
    }
}

startLogin();