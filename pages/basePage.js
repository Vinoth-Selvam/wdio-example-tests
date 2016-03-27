
var BasePage = function() {
    /**
     * goto a url
     * @return {bool} - if page isLoaded
     */
    this.goto = function() {
        browser.url(this.url);
        return this.loaded();
    };

    /**
     * waits and tests if a page is loaded
     * requires each page object to have a pageLoaded method that returns true when page is loaded
     * @return {bool} 
     */
    this.isLoaded = function() {
        var that = this;
        return browser.waitUntil(function() {
            return that.pageLoaded;
        }, 5000);
    };

    /**
     * switch to a window/tab using an index
     * @param  {int} index - the window's index
     */
    this.switchToWindow = function(index) {
        var windows = browser.windowHandles();
        browser.switchTab(windows.value[index]);
    };

    /**
     * get an element's size in pixles
     * @param  {locator} element [description]
     * @return {object} json object with width: and height:
     */
    this.getSize = function(element) {
        // getElementSize wants a string
        return browser.getElementSize(element.selector);
    };

    /**
     * wrapper for hitting enter key
     */
    this.hitEnter = function() {
        browser.keys('Enter');
    };
};
module.exports = new BasePage();