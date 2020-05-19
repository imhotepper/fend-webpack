async function getData(formUrl) {

    return await fetch('http://localhost:8080/analyse', {
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            url: formUrl
        })
    }).then(function(resp) {
        return resp.json();
    }).catch(function(err) {
        alert(err);
        return;
    })
}



async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (Client.urlChecker(formText) != true) {
        alert('Invalid address to summarize!\nThe address should start with http:// or https://');
        return false;
    }

    console.log("::: Form Submitted :::")
    const content = document.getElementById('results');
    content.innerHTML = "Analysing, please wait ...";


    const res = await getData(formText);

    if (!res) {
        content.innerHTML = "Ups, something went wrong!";

    } else {
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
    }

}




export { handleSubmit, getData }