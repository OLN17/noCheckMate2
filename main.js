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
        }
