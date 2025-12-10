function destacar(seccio) {

    seccio.style.backgroundColor = "#ffe082";
    seccio.style.color = "#000";

    const textOcult = seccio.querySelector(".text-ocult");
    if (textOcult) {
        textOcult.style.display = "block";
    }
}

function restaurar(seccio) {

    seccio.style.backgroundColor = "";
    seccio.style.color = "";

    const textOcult = seccio.querySelector(".text-ocult");
    if (textOcult) {
        textOcult.style.display = "none";
    }
}