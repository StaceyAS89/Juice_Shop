
    export function headLessLogin(user){
        cy.request({
            method: 'POST',
            url: '/rest/user/login',
            body: {
                email: user.email,
                password: user.password,
            }
        })
    }

export function findItem(itemName) {
    cy.get('body').then(body => {
        if (body.find(`div.item-name:contains("${itemName}")`).length > 0) {
            cy.get(`div.item-name:contains("${itemName}")`).parent().parent().next().children().click();
        }
        else if(body.find(`[aria-label="Next page"]`).length > 0){
            cy.get(`[aria-label="Next page"]`).click({force: true});
            findItem(itemName)
        }
        else {
            alert(`The ${itemName} not found`)
        }
    })}