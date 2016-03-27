var qsHomePage = require('../pages/qsHomePage');
var githubPage = require('../pages/githubPage');

describe('Quality Shepherd Site', function() {
    var DEFAULT_WIN = 0,
        NEW_WIN = 1;

    beforeEach(function() {
        qsHomePage.goto();
    });

    describe('homepage', function() {
        it('should load home page', function() {
            expect(qsHomePage.isLoaded()).toBe(true);
        });

        it('should show 5 posts', function() {
            expect(qsHomePage.posts.value.length).toBe(5);
        });

        it('should open social media link in new window', function() {
            qsHomePage.githubLink.click();
            // switch to the new winwow/tab... 
            qsHomePage.switchToWindow(NEW_WIN);

            expect(githubPage.isLoaded()).toBe(true);

            // cleanup: close new window and switch back to original window...
            browser.close(NEW_WIN); 
            qsHomePage.switchToWindow(DEFAULT_WIN);
        });

        it('sidebar should have a set width', function() {
            expect(qsHomePage.getSize(qsHomePage.sidebar).width).toBe(280);
        });
    });

    describe('search', function() {
        it('should return no results message', function() {
            qsHomePage.searchFor('sfdslkjsfkjslkdf');

            expect(qsHomePage.noResultsMsg.isExisting()).toBe(true);
        });

        it('should return search results', function() {
            qsHomePage.searchFor('protractor');
            
            expect(qsHomePage.posts.value.length).toBeGreaterThan(0);
        });
    });      
});