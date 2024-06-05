async function lerNFC() {
            if ('NDEFReader' in window) {
                try {
                    const nfc = new NDEFReader();
                    await nfc.scan();
                    nfc.onreading = event => {
                        const uid = event.serialNumber;
                        document.getElementById("resultado").textContent = `UID: ${uid}`;
                    };
                } catch (error) {
                    console.error("Erro ao ler NFC:", error);
                }
            } else {
                console.error("API NFC não suportada neste navegador.");
            }
        };
  document.getElementById("settingsButton").addEventListener("click", function() {
      // Redirecionar para a página de configurações
      window.location.href = "config.html";
  });
document.querySelector(".goBackButton").addEventListener("click", function() {
      // Redirecionar para a página anterior
      window.history.back();
    });
