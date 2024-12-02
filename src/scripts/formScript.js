const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const submitIcon = document.getElementById("submitIcon");
const loadingIcon = document.getElementById("loadingIcon");
const successIcon = document.getElementById("successIcon");
const errorIcon = document.getElementById("errorIcon");

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
            submitButton.classList.add("bg-verde-500");
            setTimeout(() => {
                submitButton.disabled = false;
                successIcon.classList.add("hidden");
                submitIcon.classList.remove("hidden");
                submitButton.classList.remove("bg-verde-500");
            }, 4000);
        } else {
            loadingIcon.classList.add("hidden");
            errorIcon.classList.remove("hidden");
            submitButton.classList.add("bg-rosso-500");
            setTimeout(() => {
                submitButton.disabled = false;
                errorIcon.classList.add("hidden");
                submitIcon.classList.remove("hidden");
                submitButton.classList.remove("bg-rosso-500");
            }, 4000);
        }
    } catch(error){
        console.error("errore durante l'invio del messaggio")
    }
});
