document.addEventListener("DOMContentLoaded", function() {
    const scanButton = document.getElementById("scanButton");
    const tagDataDiv = document.getElementById("tagData");
  
    scanButton.addEventListener("click", async () => {
      try {
        const reader = new rc522();
        await reader.start();
        const tagData = await reader.scanCard();
        console.log("Dados da Tag NFC:", tagData);
        tagDataDiv.textContent = "Dados da Tag NFC: " + tagData;
      } catch (error) {
        console.error("Erro ao ler a tag NFC:", error);
        tagDataDiv.textContent = "Erro ao ler a tag NFC: " + error.message;
      }
    });
});
