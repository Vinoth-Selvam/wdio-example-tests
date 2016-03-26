var qsHomePage = require('../pages/qsHomePage');

describe('Quality Shepherd', function() {
    beforeEach(function() {
        qsHomePage.goto();
    });

    it('should load home page', function() {
        expect(qsHomePage.isLoaded()).toBe(true);
    });

    it('should show 5 posts', function() {
        expect(qsHomePage.posts.value.length).toBe(5);
    });

    it('unfound search term should return no results', function() {
        qsHomePage.searchFor('sfdslkjsfkjslkdf');

        expect(qsHomePage.noResultsMsg.isExisting()).toBe(true);
    });

    it('should return search results', function() {
        qsHomePage.searchFor('protractor');
        
        expect(qsHomePage.posts.value.length).toBeGreaterThan(0);
    });
});