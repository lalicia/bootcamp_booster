describe('Renders the Bootcamp Booster Homepage', () => {
  	  it('Renders the Homepage correctly', () => {
  	    cy.visit('http://localhost:3001')
  	
	    cy.get('button')


      })
    
   })
      
  
  	describe('Takes user to CSS resources page', () => {
  	it('.click() - click on a DOM element', () => {
  	  cy.get('HTML').click()
  	
   
  	  
     })

  
      it('check all links are working correctly on page', () => {
  
    cy.visit('http://localhost:3001/css')
        cy.get('a').each(page => {
        cy.request(page.prop('href'))
       
       
      })
  
  	})
  
  })
  