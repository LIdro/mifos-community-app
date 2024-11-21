var mifosX = (function (module) {
    module.ng = {
        config: {
            baseApiUrl: window.baseApiUrl || "https://bank.fluidefinance.io",
            tenantIdentifier: window.tenantIdentifier || "default"
        }
    };
    return module;
}(mifosX || {}));
