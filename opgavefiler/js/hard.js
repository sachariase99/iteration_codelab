fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                // Initialiser opgave 1
                displayUsers(data.users, 'opgave1');
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
            users.slice(0, 30).forEach(user => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    Fornavn: ${user.firstName}, Efternavn: ${user.lastName}
                    <button onclick="displayUserDetails(${JSON.stringify(user)}, '${opgaveOne}')">Vis</button>
                `;
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
            userDetails.innerHTML = `
                Fornavn: ${user.firstName}<br>
                Efternavn: ${user.lastName}<br>
                <button onclick="displayUsers(data.users, '${opgaveOne}')">Tilbage</button>
            `;

            // Tilføj detaljerne til opgaveOneElement
            opgaveOneElement.appendChild(userDetails);
        }