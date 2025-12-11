document.getElementById("btnCalcular").addEventListener("click", calcular);

function calcular() {
    const tipo = document.getElementById("tipo").value;
    const horas = Number(document.getElementById("horas").value);
    const mensalista = document.getElementById("mensalista").checked;
    const resultado = document.getElementById("resultado");

    if (horas <= 0 || isNaN(horas)) {
        resultado.innerText = "Erro: informe um número de horas maior que zero.";
        resultado.className = "erro";
        return;
    }

    let valor = 0;

    if (tipo === "carro") {
        valor = horas <= 2 ? 10 : 10 + (horas - 2) * 3;
    } else {
        valor = horas <= 2 ? 8 : 8 + (horas - 2) * 2;
    }

    if (mensalista) valor *= 0.9;

    resultado.className = "";
    resultado.innerText = `Total: R$ ${valor.toFixed(2)}`;
}