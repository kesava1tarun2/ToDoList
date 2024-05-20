document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector("#add");
    const btn = document.querySelector("#btn");
    const list = document.querySelector("#list");

    // Function to add elements when the button is clicked
    btn.onclick = function() {
        const txt = input.value.trim();
        if (txt === '') {
            alert('You must write something');
        } else {
            const li = document.createElement('li');
            li.textContent = txt;
            list.insertBefore(li, list.childNodes[0]);
            input.value = '';
        }
    };

    // Function to check the clicked elements
    list.onclick = function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    };
});
