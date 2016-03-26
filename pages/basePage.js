
var BasePage = function() {
    /**
     * goto a url
     */
    this.goto = function() {
        browser.url('/' + this.url);
        //this.loaded();
    };

    /**
     * tests if a page is loaded
     * requires page object to have a pageLoaded() that returns true when loaded
     * @return {bool} 
     */
    this.isLoaded = function() {
        console.log('is it loaded?');
        return this.pageLoaded;
    };

    this.hitEnter = function() {
        browser.keys('Enter');
    };
};
module.exports = new BasePage();