document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-imc");
    const pesoInput = document.getElementById("Peso");
    const alturaInput = document.getElementById("Altura");
    const resultado = document.getElementById("result");
    let resultado2 = document.getElementById("result2");
    const container = document.getElementById("container");
    
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 

      const peso = Number(pesoInput.value);
      const altura = Number(alturaInput.value);

      if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Digite valores válidos para peso e altura!");
        return;
      }
      let imc = (peso / (altura ** 2)).toFixed(2);
      resultado.textContent = imc

      if (imc < 18.5) {
        resultado2.textContent = "Abaixo do peso";
        resultado2.className = "abaixo-peso";
      } 
      else if (imc >= 18.5 && imc < 25) {
        resultado2.textContent = "Peso normal";
        resultado2.className = "peso-normal";
      }
      else if (imc >= 25 && imc < 30) {
        resultado2.textContent = "Sobrepeso";
        resultado2.className = "sobrepeso";
      }
      else if (imc >= 30 && imc < 35) {
        resultado2.textContent = "Obesidade Grau I";
        resultado2.className = "obesidade";
      }
      else if (imc >= 35 && imc < 40) {
        resultado2.textContent = "Obesidade Grau II";
        resultado2.className = "obesidade";
      }
      else {
        resultado2.textContent = "Obesidade Grau III";
        resultado2.className = "obesidade-grave";
      }
      container.classList.remove("hide");
    });
  });