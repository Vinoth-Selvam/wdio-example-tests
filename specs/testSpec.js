qsHomePage = require('../pages/qsHomePage');

describe('Quality Shepherd', function() {
    beforeEach(function() {
        return browser.url(qsHomePage.url);
    });

    it('should open in browser', function() {
        return browser.getTitle().then(function(title) {
            expect(title).toBe(qsHomePage.title);
        });
    });

    it('should show 5 posts', function() {
        return browser.elements(qsHomePage.posts).then(function(posts) {
            expect(posts.value.length).toBe(5);
        });
    });

    it('should return search results', function() {
        return browser
            .setValue(qsHomePage.searchBox, 'protractor')
            .elements(qsHomePage.posts).then(function(posts) {
                expect(posts.value.length).toBeGreaterThan(0);
            });
    });
});