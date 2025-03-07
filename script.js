document.getElementById("connect-wallet").addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            alert("Wallet connected successfully!");
        } catch (error) {
            alert("Connection failed: " + error.message);
        }
    } else {
        alert("Please install MetaMask!");
    }
});
