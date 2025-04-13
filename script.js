function calcularImpacto() {
    // Captura o valor digitado e converte para inteiro
    let garrafas = parseInt(document.getElementById("garrafas").value);
    if (isNaN(garrafas) || garrafas < 0) {
      document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
      return;
    }
  
    // Dados reais com conversões:
    // Cada garrafa PET de 500 ml reciclada:
    // - Economia de petróleo: 2,6 mL
    // - Redução de CO₂: 10 g
    let petroleoEconomizado = garrafas * 2.6; // em mL
    let co2Evitado = garrafas * 10; // em g
  
    document.getElementById("resultado").innerHTML = `
      <p>Você economizou <strong>${petroleoEconomizado.toFixed(2)} mL</strong> de petróleo.</p>
      <p>E evitou a emissão de <strong>${co2Evitado.toFixed(2)} g</strong> de CO₂ na atmosfera!</p>
      <p><small>Dados baseados na EPA e no Container Recycling Institute.</small></p>
    `;
  }
  