const resultado = document.getElementById("resultado")
const inputValor = document.getElementById("valor")
const selectType = document.getElementById("tipo_simulacao")
const selectPmts = document.getElementById("parcelas")
const selectClient = document.getElementById("cliente")



const simular = () => {

    const valor = document.getElementById("valor").value
    const tipoSimulacao = document.getElementById("tipo_simulacao").value
    const selectparcelas = document.getElementById("parcelas").value
    const selectTypeClient = document.getElementById("cliente").value
    

    let taxaJuros

    if (valor === "" || tipoSimulacao === "" || selectparcelas === ""
        || selectTypeClient === "") {
        return alert("Preencha todos os campos")
    }

    if (selectTypeClient === "inss") {
        taxaJuros = 0.018
    } else if (selectTypeClient === "siape") {
        taxaJuros = 0.018
    }

    const valorNumerico = Number(valor)
    const parcelasNumerico = Number(selectparcelas)
    let resultadoFinal

    if (tipoSimulacao === "total_value") {

        const total = valorNumerico + (valorNumerico * taxaJuros)
        const parcela = total / parcelasNumerico
        resultadoFinal = parcela

        resultado.innerHTML = `Valor solicitado ${valorNumerico.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}<br><br>
        Parcelas: ${selectparcelas}x<br><br>
        Valor estimado da parcela: ${resultadoFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })} <br><br>
        <strong>Taxa de juros: ${(taxaJuros * 100).toFixed(2)}</strong>` 

    } else if (tipoSimulacao === "parcela") {

        const totalPossivel = valorNumerico * parcelasNumerico
        const valorLiberado = totalPossivel / (1 + taxaJuros)
        resultadoFinal = valorLiberado

        resultado.innerHTML = `Parcela desejada: ${valorNumerico.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}<br><br>
        Parcelas: ${selectparcelas}x<br><br>
        Valor liberado estimado: ${resultadoFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })}<br><br>
        <strong>Taxa de juros: ${(taxaJuros * 100).toFixed(2)}</strong>`    

}

 }

    const limparResultado = () => {
        
        resultado.innerHTML = "" 
                    
    }    

inputValor.addEventListener ("input", limparResultado)
selectType.addEventListener ("change", limparResultado)
selectPmts.addEventListener ("change", limparResultado)
selectClient.addEventListener ("change", limparResultado)









