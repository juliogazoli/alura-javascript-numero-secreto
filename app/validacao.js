function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute // converte para inteiro

    if (chuteForInvalido(numero)) {
        console.log('Valor inválido')
    }

    if (numeroForMaiorOuMenorQueOValorPermitido) {
        console.log(`valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}