(function (mifosX) {
    var defineHeaders = function ($httpProvider, $translateProvider, ResourceFactoryProvider, HttpServiceProvider, $idleProvider, $keepaliveProvider, IDLE_DURATION, WARN_DURATION, KEEPALIVE_INTERVAL) {
        var baseApiUrl = mifosX.ng.config.baseApiUrl;
        var tenantIdentifier = mifosX.ng.config.tenantIdentifier;

        // Set tenant identifier
        $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = tenantIdentifier;
        ResourceFactoryProvider.setTenantIdenetifier(tenantIdentifier);

        // Set base URL
        ResourceFactoryProvider.setBaseUrl(baseApiUrl);
        HttpServiceProvider.addRequestInterceptor('demoUrl', function (config) {
            return _.extend(config, {url: baseApiUrl + config.url });
        });

        // Enable CORS
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        //Set headers
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

        // Configure i18n and prefer language
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useStaticFilesLoader({
            prefix: 'global-translations/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');

        //Timeout settings.
        $idleProvider.idleDuration(IDLE_DURATION); //Idle time 
        $idleProvider.warningDuration(WARN_DURATION); //warning time(sec)
        $keepaliveProvider.interval(KEEPALIVE_INTERVAL); //keep-alive ping
    };
    mifosX.ng.application.config(defineHeaders).run(function ($log, $idle) {
        $log.info("Initial tasks are done!");
        $idle.watch();
    });
}(mifosX || {}));

getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

QueryParameters = (function () {
    var result = {};
    if (window.location.search) {
        // split up the query string and store in an associative array
        var params = window.location.search.slice(1).split("&");
        for (var i = 0; i < params.length; i++) {
            var tmp = params[i].split("=");
            result[tmp[0]] = unescape(tmp[1]);
        }
    }
    return result;
}());
