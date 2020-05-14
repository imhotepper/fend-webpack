function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (Client.urlChecker(formText) != true) {
        alert('Invalid address to summarize!\nThe address should start with http:// or https://');
        return;
    }

    console.log("::: Form Submitted :::")
    const content = document.getElementById('results');
    content.innerHTML = "Analysing, please wait ...";

    //fetch('http://localhost:8080/test')
    fetch('http://localhost:8080/analyse', {
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                url: formText
            })
        })
        .then(res => res.json())
        .then(function(res) {
            console.dir(res);
            const ps = [];
            res.data.forEach(element => {
                const p = document.createElement('p');
                p.innerHTML = element;
                ps.push(p);
            });
            content.innerHTML = "";
            ps.map(p => {
                content.appendChild(p);
            })
        }).catch(err => {
            content.innerHTML = "Ups, something went wrong!";

            alert(err);
        })
}

export { handleSubmit }