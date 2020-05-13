function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
        //fetch('http://localhost:8080/test')
    fetch('http://localhost:8080/analyse', {
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
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
            const content = document.getElementById('results');
            content.innerHTML = "";
            ps.map(p => {
                    content.appendChild(p);
                })
                //document.getElementById('results').appendChild(ps);
                //ok document.getElementById('results').innerHTML = res.data
                // document.getElementById('results').innerHTML = JSON.stringify(res.analysed)
        })
}

export { handleSubmit }