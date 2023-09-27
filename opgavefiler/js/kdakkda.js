/* opgave 1 */
console.group("opgave 1");

// Hent data fra API-endepunktet
fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => {
        // Kald funktionen til at vise data
        displayUsers(data.users);
    })
    .catch(error => {
        console.error('Fejl ved hentning af data:', error);
    });

// Funktion til at vise brugerdata
function displayUsers(users) {
    const opgave1Element = document.getElementById('opgave1');
    const userList = document.createElement('ul');

    // Gennemgå hver bruger og opret en liste med fornavn, efternavn og en knap
    users.slice(0, 30).forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            Fornavn: ${user.firstName}, Efternavn: ${user.lastName}
            <button onclick="alert('Vis bruger: ${user.firstName} ${user.lastName}')">Vis</button>
        `;
        userList.appendChild(listItem);
    });

    opgave1Element.appendChild(userList);
}

console.groupEnd();