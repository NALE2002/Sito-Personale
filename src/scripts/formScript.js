const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const submitIcon = document.getElementById("submitIcon");
const successIcon = document.getElementById("successIcon");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitButton.disabled = true;


    try {
        const res = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        });

        if(res.ok){
            submitIcon.classList.add("hidden");
            successIcon.classList.remove("hidden");
            submitButton.classList.add("bg-green-500");
        } else {
            alert("errore durante l'invio del messaggio");
        }
    } catch(error){
        console.error("errore durante l'invio del messaggio ANNODAMACROP")
    }
});
