(function() {
    const baseApiUrl = window.baseApiUrl || 'https://fineract.cap.smartlabs.work/fineract-provider';  // Replace with your actual Fineract domain
    const tenantIdentifier = window.tenantIdentifier || 'default';

    window.mifosX = window.mifosX || {};
    window.mifosX.baseApiUrl = baseApiUrl;
    window.mifosX.tenantIdentifier = tenantIdentifier;
})();