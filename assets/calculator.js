function calculator() {
    const operation = Number(prompt('Escolha uma operation: \n 1 - soma(+)\n 2 - subtracao (-)\n 3 - multiplicacao (*)\n 4 - divisao real(/)\n 5 - divisao inteira(%)\n 6 - potenciacao (**)'))
    console.log(operation);

    if (!operation || operation >= 7) {
        alert('error-operacion e invalida')
        calculator();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('error parametros invalidos')
            calculator();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperation();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperation();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperation();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperation();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} e igual = ${resultado}`)
                novaOperation();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} = ${resultado}`)
                novaOperation();
            }

            function novaOperation() {
                let opcao = prompt(' deseja fazer outra operacao?\n 1- Sim\n 2 - Nao');
                if (opcao == 1) {
                    calculator();
                } else if (opcao == 2) {
                    alert('Ate mais!');
                } else {
                    alert('Digite uma opcao Valida')
                    novaOperation();
                }
            }

        }
        // Tratamiento con switch
        // if (operation == 1) {
        //     soma();
        // } else if (operation == 2) {
        //     subtracao();
        // } else if (operation == 3) {
        //     multiplicacao();
        // } else if (operation == 4) {
        //     divisaoReal();
        // } else if (operation == 5) {
        //     divisaoInteira();
        // } else if (operation == 6) {
        //     potenciacao();
        // }

        switch (operation) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
            case 6:
                potenciacao();
                break;
        }
    }


}


calculator();
