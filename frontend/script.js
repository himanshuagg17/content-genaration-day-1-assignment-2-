document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const quoteContainer = document.getElementById('quoteContainer');
    
    function loaderOn(){
        document.querySelector(".loader").style.display = "inline-block"
        document.querySelector("body").style.background = "gray"
    }

    function loaderOff(){
        document.querySelector(".loader").style.display = "none"
        document.querySelector("body").style.background = "white"
    }


    generateButton.addEventListener('click', () => {
      const keywordInput = document.getElementById('keywordInput');
      const prompt = keywordInput.value;
      console.log(prompt,fetchQuote(prompt));
      
    });
  
   async function fetchQuote(prompt) {
        loaderOn()
     let x= await fetch('http://localhost:3000/generateQuote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {prompt} )
      })
      let data=await x.json();
      console.log(data);

      if(data){
        loaderOff()
        quoteContainer.innerHTML = data.message
      }else{
        quoteContainer.innerHTML = "Error while generating Quote"
      }
    }
  });
  