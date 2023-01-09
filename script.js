alert("CALCULADORA UTILIZANDO: HTML5,CSS3,JAVASCRIPT                                                                                                                    Desenvolvido por @dieg0.dev")

function inserir(num)
{
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('result').innerHTML = "";
}
function ApagarUltimoNum()
{
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
function calcular()
{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else
    {
        document.getElementById('result').innerHTML = ""
    }
}

