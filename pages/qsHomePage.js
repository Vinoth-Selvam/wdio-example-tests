var basePage = require('./basePage');
var searchModule = require('./searchModule');

var qsHomePage = Object.create(basePage, {
    // required for direct navigation (eg. page.goto())
    url: { get: function() { return '/'; }},
    // should return true when on page
    pageLoaded: { get: function() { return this.siteTitle.isVisible(); }},

    // modules
    search: { value: Object.create(this, searchModule) },

    // locators
    title: { get: function() { return 'towards better software… » Quality Shepherd  '; }},
    siteTitle: { get: function() { return browser.element('h1.site-title'); }},
    posts: { get: function() { return browser.elements('div.post'); }},
    // search
    noResultsMsg: { get: function() { return browser.element('.search-no-results'); }},
    // sidebar
    sidebar: { get: function() { return browser.element('div#sidebar'); }},
    githubLink: { get: function() { return browser.element('a#githubLink'); }},
});
module.exports = qsHomePage;