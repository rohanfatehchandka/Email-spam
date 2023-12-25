


// // content_script.js
// function checkLink(url) {
//     if (url.startsWith("#")) {
//         return 0; // Return 1 for null URLs or URLs starting with #
//     }
//     // List of hyperlinks
//     // Check if the URL contains "https://mail.google.com" or "https://support.google.com"
//     if (
//         url.includes("https://mail.google.com") ||
//         url.includes("https://support.google.com") ||
//         url.includes("https://www.google")
//     ) {
//         return 0; // URL contains either "https://mail.google.com" or "https://support.google.com"
//     } else {
//         return 1; // URL does not contain either "https://mail.google.com" or "https://support.google.com"
//     }
// }

// function manipulateGmailDOM() {
//     setTimeout(() => {
//         console.log("Content script is running for Gmail...");

//         // Create a container div for styling
//         var containerDiv = document.createElement("div");
//         containerDiv.style.border = "1px solid #ccc";
//         containerDiv.style.padding = "10px";
//         containerDiv.style.borderRadius = "5px";
//         containerDiv.style.marginTop = "10px";

//         // Create a toggle button for expanding/collapsing the list
//         var toggleButton = document.createElement("div");
//         toggleButton.style.cursor = "pointer";
//         toggleButton.style.textAlign = "center";
//         toggleButton.style.padding = "5px";
//         toggleButton.style.backgroundColor = "#eee";
//         toggleButton.style.marginBottom = "5px";
//         toggleButton.textContent = "Expand List ▼";
//         var isListExpanded = false;

//         // Create an unordered list element to append the links
//         var ulElement = document.createElement("ul");
//         ulElement.style.display = "none";

//         // Select all anchor tags in the document
//         var anchorTags = document.querySelectorAll('a');

//         // Loop through each anchor tag and append the href attribute value to the list
//         anchorTags.forEach(function (anchorTag) {
//             var hrefValue = anchorTag.getAttribute('href');
//             if (hrefValue && checkLink(hrefValue)) {
//                 // Create list item element
//                 var liElement = document.createElement("li");

//                 // Set the text content of the list item to the href value
//                 liElement.textContent = hrefValue;

//                 // Append the list item to the unordered list
//                 ulElement.appendChild(liElement);
//             }
//         });

//         // Append the unordered list to the container div
//         containerDiv.appendChild(toggleButton);
//         containerDiv.appendChild(ulElement);

//         // Append the container div to the body of the document
//         var targetDiv = document.evaluate(
//             '/html/body/div[8]/div[2]/div/div[2]/div[5]/div/div/div/div[2]/div/div[1]/div/div[1]/div/div[2]/div[1]',
//             document,
//             null,
//             XPathResult.FIRST_ORDERED_NODE_TYPE,
//             null
//         ).singleNodeValue;

//         // Check if the target div is found
//         if (targetDiv) {
//             // Append the container div with the link list to the target div
//             targetDiv.appendChild(containerDiv);

//             // Add a click event listener to the toggle button
//             toggleButton.addEventListener("click", function () {
//                 if (isListExpanded) {
//                     ulElement.style.display = "none";
//                     toggleButton.textContent = "Expand List ▼";
//                 } else {
//                     ulElement.style.display = "block";
//                     toggleButton.textContent = "Collapse List ▲";
//                 }
//                 isListExpanded = !isListExpanded;
//             });
//         }
//     }, 7000);
// }

// // Execute the function when the content script is injected into the page
// manipulateGmailDOM();








// // content_script.js
// function checkLink(url) {
//     if (url.startsWith("#")) {
//         return 0; // Return 1 for null URLs or URLs starting with #
//     }
//     // List of hyperlinks
//     // Check if the URL contains "https://mail.google.com" or "https://support.google.com"
//     if (
//         url.includes("https://mail.google.com") ||
//         url.includes("https://support.google.com") ||
//         url.includes("https://www.google")
//     ) {
//         return 0; // URL contains either "https://mail.google.com" or "https://support.google.com"
//     } else {
//         return 1; // URL does not contain either "https://mail.google.com" or "https://support.google.com"
//     }
// }

// function manipulateGmailDOM() {
//     setTimeout(() => {
//         console.log("Content script is running for Gmail...");

//         // Create a container div for styling
//         var containerDiv = document.createElement("div");
//         containerDiv.style.border = "1px solid #ccc";
//         containerDiv.style.padding = "10px";
//         containerDiv.style.borderRadius = "5px";
//         containerDiv.style.marginTop = "10px";

//         // Create a toggle button for expanding/collapsing the list
//         var toggleButton = document.createElement("div");
//         toggleButton.style.cursor = "pointer";
//         toggleButton.style.textAlign = "center";
//         toggleButton.style.padding = "5px";
//         toggleButton.style.backgroundColor = "#eee";
//         toggleButton.style.marginBottom = "5px";
//         toggleButton.textContent = "Expand List ▼";
//         var isListExpanded = false;

//         // Create an unordered list element to append the links
//         var ulElement = document.createElement("ul");
//         ulElement.style.display = "none";

//         // Select all anchor tags in the document
//         var anchorTags = document.querySelectorAll('a');
//         let url=[]
//         // Loop through each anchor tag and append the href attribute value to the list
//         anchorTags.forEach(function (anchorTag) {
//             var hrefValue = anchorTag.getAttribute('href');
//             if (hrefValue && checkLink(hrefValue)) {
//                 // Create list item element

//                 url.push(hrefValue)
//                 var liElement = document.createElement("li");

//                 // Create a clickable link element
//                 var linkElement = document.createElement("a");
//                 linkElement.href = hrefValue;
//                 linkElement.target = "_blank"; // Open link in a new tab
//                 linkElement.textContent = hrefValue;

//                 // Append the clickable link to the list item
//                 liElement.appendChild(linkElement);

//                 // Append the list item to the unordered list
//                 ulElement.appendChild(liElement);
//             }
//         });
//         var numberOfItems = ulElement.getElementsByTagName('li').length;








//         var resul=[]

//         console.log(url);
//         const data = {
//             items: url,
//           };
//           console.log(data) 
          
//           // Make the POST request
//           fetch("http://localhost:5000/predict", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//           })
//             .then(response => response.json())
//             .then(result => {
//               console.log("Prediction result:", result);
              
                

//             })
//             .catch(error => {
//               console.error("Error:", error);
//             });



//             console.log(resul)

//             // anchorTags.forEach(function (anchorTag) {
//             //     var i=0
//             //     var hrefValue = anchorTag.getAttribute('href');
//             //     if (hrefValue && checkLink(hrefValue)) {
//             //         // Create list item element
//             //         i++
//             //         url.push(hrefValue)
//             //         var liElement = document.createElement("li");
    
//             //         // Create a clickable link element
//             //         var linkElement = document.createElement("a");
//             //         linkElement.href = hrefValue;
//             //         linkElement.target = "_blank"; // Open link in a new tab
//             //         linkElement.textContent = hrefValue;

    
//             //         // Append the clickable link to the list item
//             //         liElement.appendChild(linkElement);
    
//             //         // Append the list item to the unordered list
//             //         ulElement.appendChild(liElement);
//             //     }
//             // });





//   // Create a new <div> element
//   var divElement = document.createElement("div");

//   // Set the content of the <div> to the value of numberOfItems
//   divElement.textContent = "Number of Hidden urls in this Email: " + numberOfItems;

//         // Append the unordered list to the container div
//         containerDiv.appendChild(toggleButton);
//         containerDiv.appendChild(divElement);
//         containerDiv.appendChild(ulElement);

//         // Append the container div to the body of the document
//         var targetDiv = document.evaluate(
//             '/html/body/div[8]/div[2]/div/div[2]/div[5]/div/div/div/div[2]/div/div[1]/div/div[1]/div/div[2]/div[1]',
//             document,
//             null,
//             XPathResult.FIRST_ORDERED_NODE_TYPE,
//             null
//         ).singleNodeValue;

//         // Check if the target div is found
//         if (targetDiv) {
//             // Append the container div with the link list to the target div
//             targetDiv.appendChild(containerDiv);

//             // Add a click event listener to the toggle button
//             toggleButton.addEventListener("click", function () {
//                 if (isListExpanded) {
//                     ulElement.style.display = "none";
//                     toggleButton.textContent = "Expand List of all hidden Urls present in this email ▼";
//                 } else {
//                     ulElement.style.display = "block";
//                     toggleButton.textContent = "Collapse List ▲";
//                 }
//                 isListExpanded = !isListExpanded;
//             });
//         }
//     }, 7000);
// }

// // Execute the function when the content script is injected into the page
// manipulateGmailDOM();








function checkLink(url) {
    if (url.startsWith("#")) {
        return 0; // Return 1 for null URLs or URLs starting with #
    }
    // List of hyperlinks
    // Check if the URL contains "https://mail.google.com" or "https://support.google.com"
    if (
        url.includes("https://mail.google.com") ||
        url.includes("https://support.google.com") ||
        url.includes("https://www.google")
    ) {
        return 0; // URL contains either "https://mail.google.com" or "https://support.google.com"
    } else {
        return 1; // URL does not contain either "https://mail.google.com" or "https://support.google.com"
    }
}

function manipulateGmailDOM() {
    setTimeout(() => {
        console.log("Content script is running for Gmail...");

        // Create a container div for styling
        var containerDiv = document.createElement("div");
        containerDiv.style.border = "1px solid #ccc";
        containerDiv.style.padding = "10px";
        containerDiv.style.borderRadius = "5px";
        containerDiv.style.marginTop = "10px";

        // Create a toggle button for expanding/collapsing the list
        var toggleButton = document.createElement("div");
        toggleButton.style.cursor = "pointer";
        toggleButton.style.textAlign = "center";
        toggleButton.style.padding = "5px";
        toggleButton.style.backgroundColor = "#eee";
        toggleButton.style.marginBottom = "5px";
        toggleButton.textContent = "Expand List ▼";
        var isListExpanded = false;

        // Create an unordered list element to append the links
        var ulElement = document.createElement("ul");
        ulElement.style.display = "none";

        // Select all anchor tags in the document
        var anchorTags = document.querySelectorAll('a');
        let url = [];

        // Loop through each anchor tag and append the href attribute value to the list
        anchorTags.forEach(function (anchorTag) {
            var hrefValue = anchorTag.getAttribute('href');
            if (hrefValue && checkLink(hrefValue)) {
                url.push(hrefValue);
            }
        });

        // Make the POST request
        fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: url }),
        })
            .then(response => response.json())
            .then(result => {
                console.log("Prediction result:", result);

                // Append the result to the list
                result.forEach((prediction, index) => {
                    const liElement = document.createElement("li");
                    const linkElement = document.createElement("a");
                    linkElement.href = url[index];
                    linkElement.target = "_blank";


                    if (prediction === 'Spam') {
                        linkElement.style.color = 'red';
                    } else {
                        linkElement.style.color = 'green';
                    }
                    linkElement.textContent = `${url[index]} - Prediction: ${prediction}`;
                    liElement.appendChild(linkElement);
                    ulElement.appendChild(liElement);
                });

                // Create a new <div> element
                var divElement = document.createElement("div");

                // Set the content of the <div> to the value of numberOfItems
                divElement.textContent = "Number of Hidden urls in this Email: " + ulElement.getElementsByTagName('li').length;

                // Append the unordered list to the container div
                containerDiv.appendChild(toggleButton);
                containerDiv.appendChild(divElement);
                containerDiv.appendChild(ulElement);

                // Append the container div to the body of the document
                var targetDiv = document.evaluate(
                                '/html/body/div[8]/div[2]/div/div[2]/div[4]/div/div/div/div[2]/div/div[1]/div/div[1]/div/div[2]/div[1]',
                                document,
                                null,
                                XPathResult.FIRST_ORDERED_NODE_TYPE,
                                null
                            ).singleNodeValue;
                
                console.log("above targetdiv");
                // Append the container div with the link list to the target div
                targetDiv.appendChild(containerDiv);
                console.log("below targetdiv");

                // Add a click event listener to the toggle button
                toggleButton.addEventListener("click", function () {
                    if (isListExpanded) {
                        ulElement.style.display = "none";
                        toggleButton.textContent = "Expand List of all hidden Urls present in this email ▼";
                    } else {
                        ulElement.style.display = "block";
                        toggleButton.textContent = "Collapse List ▲";
                    }
                    isListExpanded = !isListExpanded;
                });
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, 7000);
}

// Execute the function when the content script is injected into the page
manipulateGmailDOM();
