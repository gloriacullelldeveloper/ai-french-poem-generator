// When you submit the form, it appears a little poem in italian

function displayPoem(response) {

    console.log("Poem");
    
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    });

}

function showPoem(event) {
    
    event.preventDefault();
    
    /* Import Axios, create apiUrl, apiKey, prompt and context, a call to the api generate poem */
    
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "c71c7bae8f4otf0ad66fa62c747c8831";
    let prompt = `Generate a Italian poem about ${instructionsInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems. Your mision is to create a four line Italian poem in basic HTML in each line add a space with </br> and make it ONLY Italic. When you finished the poem add a little signature 'SheCodes AI' and make the signature bold. Make sure to follow the user instructions";
     let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    /* call to the API*/

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⌛ Generating an Italian poem about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayPoem);

   
}



let selectForm = document.querySelector("#poem-generator-form");
selectForm.addEventListener("submit", showPoem);
