var basePage = require('./basePage');

var qsHomePage = Object.create(basePage, {
    // required for direct navigation (eg. page.goto())
    url: { get: function() { return '/'; }},
    // should return true when on page
    pageLoaded: { get: function() { return this.siteTitle.isVisible(); }},
    title: { get: function() { return 'towards better software… » Quality Shepherd  '; }},
    siteTitle: { get: function() { return browser.element('h1.site-title'); }},
    posts: { get: function() { return browser.elements('div.post'); }},
    searchBox: { get: function() { return browser.element('input#s'); }},
    noResultsMsg: { get: function() { return browser.element('.search-no-results'); }},

    searchFor: { value: function(searchText) {
        this.searchBox.setValue(searchText);
        this.hitEnter();
    }}
});
module.exports = qsHomePage;