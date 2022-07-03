var tentativas = 3;
var elementoResultado = document.getElementById("resultado");
var numeroSecreto;


function Sortear(){
numeroSecreto = parseInt(Math.random() * 11);
  return numeroSecreto;
}

Sortear(numeroSecreto);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  Verificar(chute);
  
  // console.log(numeroSecreto);
}



  
  function Verificar(chute){
  
  if (chute == numeroSecreto && tentativas >= 1) 
  {
    elementoResultado.innerHTML = "Você acertou!";
    document.getElementById("btnChutar").disabled = true;
  
  } else if (chute > 10 || chute < 0) 
  {
    elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10.";
  } else 
    tentativas--;
  {
    
    if (tentativas >= 1 && numeroSecreto > chute) 
    {
      elementoResultado.innerHTML = `O número é maior que ${chute}.<br>Você ainda tem <span class="try-colors -blue">${tentativas}</span> chances.`

    } else if (tentativas >= 1 && numeroSecreto < chute) 
    {
      elementoResultado.innerHTML =
        `O número é menor que ${chute}.<br>Você ainda tem <span class="try-colors -blue">${tentativas}</span> chances.`
    } else if (tentativas == 0)
    {
      elementoResultado.innerHTML =
        `Você não tem mais chances. O número é <span class="try-colors">${numeroSecreto}</span>.`
        document.getElementById("btnChutar").disabled = true;
        
    }
    
  }
}



function JogarDeNovo(){
  document.getElementById("btnChutar").disabled = false;
  Sortear();
  tentativas = 3;
elementoResultado.innerHTML =  `Novo jogo! Você tem <span class="try-colors -blue">${tentativas}</span> chances.`
// elementoResultado.innerHTML =  "Novo jogo! Você tem " + tentativas + " chances."
}
