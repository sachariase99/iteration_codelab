let userData; // Global variabel til at gemme brugerdata

fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => {
        // Gem brugerdata i den globale variabel
        userData = data;

        // Initialiser opgave 1
        displayUsers(userData.users, 'opgave1');
    })
    .catch(error => {
        console.error('Fejl ved hentning af data:', error);
    });

// Funktion til at vise brugerdata
function displayUsers(users, opgaveOne) {
    const opgaveOneElement = document.getElementById(opgaveOne);

    // Fjern eksisterende indhold, hvis der er noget
    opgaveOneElement.innerHTML = '';

    // Opret en ny ul (unordered list)
    const userList = document.createElement('ul');

    // Gennemgå hver bruger og tilføj et li (list item) element til ul
    users.slice(0, 30).forEach((user, index) => {
        const listItem = document.createElement('li');
        
        // Opret en knap til at vise detaljer om brugeren
        const button = document.createElement('button');
        button.textContent = 'Vis';
        button.addEventListener('click', () => displayUserDetails(user, opgaveOne));
        
        // Tilføj knappen til listeelementet
        listItem.innerHTML = `Fornavn: ${user.firstName}, Efternavn: ${user.lastName}`;
        listItem.appendChild(button);
        
        userList.appendChild(listItem);
    });

    // Tilføj ul til opgaveOneElement
    opgaveOneElement.appendChild(userList);
}

// Funktion til at vise detaljer om en bruger
function displayUserDetails(user, opgaveOne) {
    const opgaveOneElement = document.getElementById(opgaveOne);

    // Fjern eksisterende indhold, hvis der er noget
    opgaveOneElement.innerHTML = '';

    // Opret en div til at vise detaljer om brugeren
    const userDetails = document.createElement('div');

    // Gennemgå brugerens egenskaber og opret et HTML-element for hver
    for (const key in user) {
        if (user.hasOwnProperty(key)) {
            const value = user[key];
            const propertyElement = document.createElement('p');
            propertyElement.innerHTML = `<strong>${key}:</strong> ${value}`;
            userDetails.appendChild(propertyElement);
        }
    }

    // Tilføj tilbageknappen
    const backButton = document.createElement('button');
    backButton.textContent = 'Tilbage';
    backButton.addEventListener('click', () => displayUsers(userData.users, opgaveOne));
    userDetails.appendChild(backButton);
 
    // Tilføj detaljerne til opgaveOneElement
    opgaveOneElement.appendChild(userDetails);
}