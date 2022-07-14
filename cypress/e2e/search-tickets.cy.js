import SearchPage from '../pages/search-page'

describe('Search available tickets', ()=> {

    it('should be available tickets', ()=> {

        SearchPage.visitSearchPage()
        SearchPage.typeCity()
        SearchPage.typeDate()
        SearchPage.selectAdults()
        SearchPage.search()
        SearchPage.checkAvailability()

    })

})