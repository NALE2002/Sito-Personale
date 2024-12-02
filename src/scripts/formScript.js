const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const submitIcon = document.getElementById("submitIcon");
const loadingIcon = document.getElementById("loadingIcon");
const successIcon = document.getElementById("successIcon");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitIcon.classList.add("hidden");
    loadingIcon.classList.remove("hidden");

    try {
        const res = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        });
        
        if(res.ok){
            loadingIcon.classList.add("hidden");
            successIcon.classList.remove("hidden");
            submitButton.classList.add("bg-green-500");
        } else {
            alert("errore durante l'invio del messaggio");
        }
    } catch(error){
        console.error("errore durante l'invio del messaggio")
    }
});
