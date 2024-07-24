// Load the CryptoJS library
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
script.onload = function() {
    // Extract parameters from the DOM to create `none= `
    var scriptElement = document.querySelector('script#__root_component_script');
    var dataProps = scriptElement ? scriptElement.getAttribute('data-props') : '{}';
    var clientInfo = JSON.parse(dataProps).clientInfo || {};
    
    var payload = {
        projectKey: clientInfo.projectId, // You can replace this with a dynamic value if needed
        clientKey: clientInfo.clientKey,
        userAccountId: clientInfo.userAccountId,
        timestamp: Date.now() // This generates a current timestamp
    };

    var encryptedPayload = encodeURIComponent(
        // AES KEY 
        CryptoJS.AES.encrypt(JSON.stringify(payload), "1a6a1db1-0a8b-4a9e-bb3d-e271bf6fd85c").toString()
    );

    console.log('Encrypted Payload:', encryptedPayload);

    // Send the GET request
    var sessionid = '4455'; // Replace with your actual session name
    var url = "/session/5047?none=" + encryptedPayload;

    fetch(url, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => console.log('Response:', data))
    .catch(error => console.error('Error:', error));
};
document.head.appendChild(script);
