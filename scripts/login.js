const usuarioAdmin = "Caio Melo"
const senhaAdmin = "topayrh"





function loginUser() {
    let loginUsername = document.getElementById("loginUsername").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (loginUsername === usuarioAdmin && loginPassword === senhaAdmin) {
        redireciona();
        alert("Bem-vindo, " + usuarioAdmin + "!");
        return true
     } if (storedUsername != null && storedPassword != null) {

        if (storedUsername === loginUsername && storedPassword === loginPassword) {
            redireciona();
            alert("Bem-vindo, " + storedUsername + "!");
            return true
        } else {
            alert("Usuário não cadastrado.");
            limpaCampos()
            return false
        }
     } else {
        alert("Usuário não cadastrado.");
        limpaCampos()
        return false
    }
}

function redireciona() {
    window.location.href = "paginainicial.html"
}

function limpaCampos() {
    document.getElementById('loginUsername').value = ""
    document.getElementById('loginPassword').value = ""
}
