
var searchModule = {
    searchBox: { get: function() { return browser.element('input#s'); }},

    searchFor: { value: function(searchText) {
        this.searchBox.setValue(searchText);
        browser.keys('Enter');
    }}
};
module.exports = searchModule;