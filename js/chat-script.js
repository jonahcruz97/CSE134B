const DOM = {
    membersCount: document.querySelector('.members-count'),
    membersList: document.querySelector('.members-list'),
    messages: document.querySelector('.messages'),
    input: document.querySelector('.message-form__input'),
    form: document.querySelector('.message-form'),
};

DOM.form.addEventListener('submit', sendMessage);

function sendMessage() {
    const value = DOM.input.value;
    if (value === '') {
        return;
    }
    DOM.input.value = '';
    document.getElementById("messages").innerHTML = value; 
}

DOM.form.addEventListener('submit', sendMessage);

function sendMessage() {
    const value = document.getElementById("message-id").value;
    document.getElementById("messages").innerHTML = message; 

    
}

    function createMessageElement(text) {
        const el = document.createElement('div');
        el.appendChild(document.createTextNode(text));
        el.className = 'message';
        return el;
    }

    function addMessageToListDOM(text) {
        const el = DOM.messages;
        const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
        el.appendChild(createMessageElement(text));
        if (wasTop) {
            el.scrollTop = el.scrollHeight - el.clientHeight;
        }
    }

