// Configuration file for Fineract backend connection
(function() {
    const baseApiUrl = window.baseApiUrl || 'https://fineract-backend.cap.smartlabs.work';
    const tenantIdentifier = window.tenantIdentifier || 'default';

    window.mifosX = window.mifosX || {};
    window.mifosX.baseApiUrl = baseApiUrl;
    window.mifosX.tenantIdentifier = tenantIdentifier;
})();
