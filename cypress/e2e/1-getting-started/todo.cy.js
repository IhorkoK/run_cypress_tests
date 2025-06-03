
    //         return cy.deleteGoalById(createdGoalIds[1]);


describe("Goals test", function () {


    it('Get Goals test - should create 2 goals, fetch all and delete goals2 WORK', () => {
        const goals = [];

        cy.createGoalRandonName().then((id1) => {
            goals.push(id1);

            cy.createGoalRandonName().then((id2) => {
                goals.push(id2);

                // Fetch
                cy.sendRequest('https://api.clickup.com/api/v2/team/90151250171/goal', 'GET').then((response) => {
                    expect(response.status).to.equal(200);

                    const fetchedGoals = response.body.goals || [];
                    const fetchedGoalIds = fetchedGoals.map(goal => goal.id);

                    expect(fetchedGoalIds).to.include.members(goals);
                });

                // Delete first goal
                cy.deleteGoalById(id1).then((del1) => {
                    expect(del1.status).to.equal(200);
                });

                // Delete second goal
                cy.deleteGoalById(id2).then((del2) => {
                    expect(del2.status).to.equal(200);
                });
            });
        });
    });

    it('Create goal test, should create, check/fetch and delete goal by id ', () => {
        cy.createGoalRandonName().then((id1) => {

            cy.getGoalById(id1).then((GoalBody) => {
                console.log(GoalBody.id)
                //expect(GoalBody.status).to.equal(200);

                cy.deleteGoalById(id1).then((del1) => {
                    expect(del1.status).to.equal(200);
                });
            });
        })
    });

    it('Get goal test, should create, check/fetch goal by id and delete goal by id ', () => {
        cy.createGoalRandonName().then((id1) => {

            cy.getGoalById(id1).then((GoalBody) => {
                console.log(GoalBody.id)
                //expect(GoalBody.status).to.equal(200);

                cy.deleteGoalById(id1).then((del1) => {
                    expect(del1.status).to.equal(200);
                });
            });
        })
    })

    it('Update goal test, should create, update, check goal name and delete goal by id ', () => {

        const updatePayload = {
            name: 'Updated Goal Title'
        };
        cy.createGoalRandonName().then((id1) => {
            console.log(id1)

            cy.UpdateGoalById(id1, updatePayload).then((response) => {
            expect(response.body.goal.name).to.eq(updatePayload.name);
            expect(response.status).to.equal(200);

                cy.UpdateGoalById(id1).then((response) => { //update without name
                    expect(response.status).to.equal(400)



                cy.deleteGoalById(id1).then((del1) => {
                    expect(del1.status).to.equal(200);
                });

        });
    })
    })
    })


    it('Delete goal test: should create, delete, try delete with wrong id and verify goal is deleted', () => {
        cy.createGoalRandonName().then((id1) => {

            cy.deleteGoalById(id1).then((del1) => {
                expect(del1.status).to.equal(200);

                cy.deleteGoalByIdWrongId(id1).then((del2) => {
                    expect(del2.status).to.equal(404);
                });

                cy.getGoalByIdStatus(id1).then((GoalBody) => {
                    expect(GoalBody.status).to.equal(404);
                });
            });
        });
    });


});




