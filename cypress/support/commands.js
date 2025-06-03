const { faker } = require('@faker-js/faker');

Cypress.Commands.add('sendRequest', (endpoint, method, body = null) => {
    return cy.request({
        url: endpoint,
        method: method,
        headers: {
            'authorization': 'pk_200560449_MLKFMBUAWVYTFXASI2M3TGIKKHZ9WBMD',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    });
});

Cypress.Commands.add('createGoalRandonName', () => {
    return cy.sendRequest('https://api.clickup.com/api/v2/team/90151250171/goal', 'POST', {
        "name": faker.internet.username()
    }).then((response) => {
        return cy.wrap(response.body.goal.id).as('GoalId')
    });
});

Cypress.Commands.add('deleteGoalById', (id) => {
    return cy.sendRequest(`https://api.clickup.com/api/v2/goal/${id}`, 'DELETE')
        .then((response) => {
            expect(response.status).to.eq(200);
        });
});

Cypress.Commands.add('deleteGoalByIdWrongId', (id) => {
    return cy.sendRequest(`https://api.clickup.com/api/v2/goal/${id}`, 'DELETE')
        .then((response) => {
            expect(response.status).to.eq(404);
        });
});

Cypress.Commands.add('getGoalById', (id) => {
    return cy.sendRequest(`https://api.clickup.com/api/v2/goal/${id}`, 'GET')
        .then((response) => {
            expect(response.status).to.eq(200);
            return cy.wrap(response.body.goal);
        });
});

Cypress.Commands.add('getGoalByIdStatus', (id) => {
    return cy.sendRequest(`https://api.clickup.com/api/v2/goal/${id}`, 'GET')
        .then((response) => {
            //expect(response.status).to.eq(200);
            return cy.wrap(response);
        });
});

Cypress.Commands.add('UpdateGoalById', (id, updatedData) =>{
    return cy.sendRequest(`https://api.clickup.com/api/v2/goal/${id}`, 'PUT', updatedData)
        .then((response) => {
            //expect(response.status).to.eq(200);
            return cy.wrap(response);
    });
})




// Cypress.Commands.add('createGoalWithTitle', (title) => {
//     return cy.request('POST', '/api/goals', { title }).then((res) => {
//         expect(res.status).to.eq(201);
//         return res.body.id;
//     });
// });
