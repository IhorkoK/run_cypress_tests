//
//
// Cypress.Commands.add('sendRequest', (endpoint, method, body = null) => {
//     return cy.request({
//         url: endpoint,
//         method: method,
//         headers: {
//             'authorization': 'pk_188609355_7L8T8DOVKGMEJW1K7YBPN7TB8IUPPDIJ',
//             'Content-Type': 'application/json'
//         },
//         failOnStatusCode: false,
//         body: body
//     });
// });
//
// Cypress.Commands.add('createGoal', () => {
//     cy.sendRequest('space/90154394169/folder', 'POST', {"name": faker.internet.username()})
//         .then((response) => {
//             cy.wrap(response.body.id).as('folderId')
//         })
// })
//
//
