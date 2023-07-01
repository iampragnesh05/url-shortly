function validateForm(event){
    event.preventDefault();

    const urlInput  = document.getElementById('url-input');
    const textBelow = document.querySelector('.text-below')
    const copyBtn = document.getElementById(`copy-button`)


    if (urlInput.value.trim() == ''){
        textBelow.style.display = 'block';
        urlInput.classList.add('error');
        urlInput.style.border = '2px solid #f46262'
    } else {
        textBelow.style.display = 'none'
        urlInput.classList.remove('error')
    }


    let destination = $("#url-input").val();
    urlInput.value = ''; // Clear the input value
    let linkRequest = {
        destination: destination,
        domain: { fullName: "rebrand.ly" }
        //, slashtag: "A_NEW_SLASHTAG"
        //, title: "Rebrandly YouTube channel"
      }

      let requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "694ab286db9a4ed9b94cf60d6b2efd87"
      }
      
      $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "post",
        data: JSON.stringify(linkRequest),
        headers: requestHeaders,
        dataType: "json",
        success: (link) => {
          console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
          $("#section-text").text(share-line); // 
          $("#colored-text").text(link.shortUrl); 
          copyBtn.style.display = 'block'
        }
      });
    }


function copyText(button) {
    const coloredText = document.querySelector('.colored-text');
    
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = coloredText.textContent;
    document.body.appendChild(tempInput);
  
    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the selected text to the clipboard
    document.execCommand('copy');
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  
    // Change the text color and button color
    coloredText.style.color = 'var(--color-primary-dark-violet)';
    button.textContent = 'Copied!';
    button.style.backgroundColor = 'var(--color-primary-dark-violet)';
  }




//   let linkRequest = {
//     destination: "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g",
//     domain: { fullName: "rebrand.ly" }
//     //, slashtag: "A_NEW_SLASHTAG"
//     //, title: "Rebrandly YouTube channel"
//   }
  
//   let requestHeaders = {
//     "Content-Type": "application/json",
//     "apikey": "da1fd38698af4fd3b929eedffd5ca656"
//   }
  
//   $.ajax({
//     url: "https://api.rebrandly.com/v1/links",
//     type: "post",
//     data: JSON.stringify(linkRequest),
//     headers: requestHeaders,
//     dataType: "json",
//     success: (link) => {
//       console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
//     }
//   });



