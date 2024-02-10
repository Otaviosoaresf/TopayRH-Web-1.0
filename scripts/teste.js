if (loginUsername === storedUsername && loginPassword === storedPassword) {
    alert("Bem-vindo, " + storedUsername + "!");
    redireciona();
    return true;

 }