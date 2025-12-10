function validarContrasenya() {
    const pwd1 = document.getElementById("pwd1").value;
    const pwd2 = document.getElementById("pwd2").value;

    if (pwd1.length < 8) {
        alert("La contrasenya ha de tenir com a mínim 8 caràcters.");
        return false;
    }

    if (pwd1 !== pwd2) {
        alert("Les contrasenyes no coincideixen.");
        return false;
    }

    alert("S'ha canviat correctament la contrasenya");
    return false;
}
