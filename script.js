document.getElementById("connectWallet").addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            alert("ארנק מחובר: " + accounts[0]);
        } catch (error) {
            alert("שגיאה בחיבור לארנק: " + error.message);
        }
    } else {
        alert("נא להתקין Metamask!");
    }
});

document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
