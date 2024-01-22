(function (P, R, O, t, E, C, T) {
    P[t] = P[t] || function () { (P[t].q = P[t].q || []).push(arguments) };
    C = R.createElement(O), T = R.getElementsByTagName(O)[0];
    C.id = t; C.src = E;
    T.parentNode.insertBefore(C, T);

    P._pgr('init', {
        environment: 'test',
        debug: true,
        vendorCode: 'ven_local_6ba3e093c67c428b90670440441469a2',
        currencyCode: 'USD',
        languageCode: 'en',
        eventDateFormat: 'DD/MM/YYYY',
        useSaleAction: true
        // optional, set this to false if you intend to call our sale endpoint manually
    })

    R.addEventListener('PgWidgetLoaded', function() {
        const data = {
            totalValue: 100,
            numberOfTickets: 1,
            eventTravelDateTime: '31/12/2024'
        }

        P._pgr('action', 'updateQuoteData', {...data})
    })
}(window, document, 'script', '_pgr', 'https://cdn.jsdelivr.net/gh/abelpenton/test-scrip-host@main/widget.js'));