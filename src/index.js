// When you submit the form, it appears a little poem in italian

function showPoem(event) {

    event.preventDefault();
    new Typewriter("#poem", {
    strings: "I fiori della Primavera  sono i sogni",
    autoStart: true,
    delay: 1,
    cursor: "",
});
}


let selectForm = document.querySelector("#poem-generator-form");
selectForm.addEventListener("submit", showPoem);
