var basePage = require('./basePage');

var githubPage = Object.create(basePage, {
    url: { get: function() { return 'https://github.com/qualityshepherd'; }},
    // should return true when on page
    pageLoaded: { get: function() { return this.githubUsername.isExisting(); }},

    githubUsername: { get: function() { return browser.element('div.vcard-username'); }}
});
module.exports = githubPage;