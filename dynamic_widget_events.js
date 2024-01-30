(function (P, R, O, t, E, C, T) {
    P[t] = P[t] || function () { (P[t].q = P[t].q || []).push(arguments) };
    C = R.createElement(O), T = R.getElementsByTagName(O)[0];
    C.id = t; C.src = E;
    T.parentNode.insertBefore(C, T);   
}(window, document, 'script', '_pgr', 'https://cdn.jsdelivr.net/gh/abelpenton/test-scrip-host@main/widget.js'));

let data = {
    totalValue: 100,
    numberOfTickets: 1,
    eventTravelDateTime: '31/12/2024'
}

window._pgr('init', {
    environment: 'test',
    debug: true,
    vendorCode: 'ven_local_6ba3e093c67c428b90670440441469a2',
    currencyCode: 'USD',
    languageCode: 'en',
    eventDateFormat: 'DD/MM/YYYY',
    useSaleAction: true,
    displayTrustPilot: false,
    // optional, set this to false if you intend to call our sale endpoint manually
})

document.addEventListener('PgWidgetLoaded', function() {
    window._pgr('action', 'updateQuoteData', {...data})
})

document.addEventListener('LanguageCodeChange', function(arg) {
    const {detail: {languageCode}} = arg
    console.log(`Language Code Changed: ${languageCode}`)
    data = {...data, languageCode}
    window._pgr('action', 'updateQuoteData', {...data})
})

document.addEventListener('BookingCostChange', function(arg) {
    const {detail: {bookingCost}} = arg
    console.log(`Booking Cost Changed: ${bookingCost}`)
    data = {...data, totalValue: bookingCost}
    window._pgr('action', 'updateQuoteData', {...data})
})

document.addEventListener('EventDateChange', function(arg) {
    const {detail: {eventDate}} = arg
    console.log(`Event Date Changed: ${eventDate}`)
    data = {...data, eventTravelDateTime: eventDate}    
    window._pgr('action', 'updateQuoteData', {...data})
})

document.addEventListener('VerticalChange', function(arg) {
    const {detail: {verticalMember}} = arg
    console.log(`Vertical Changed: ${verticalMember}`)
    data = {...data, member: verticalMember}    
    window._pgr('action', 'updateQuoteData', {...data})
})

document.addEventListener('CurrencyChange', function(arg) {
    const {detail: {currency}} = arg
    console.log(`Currency Changed: ${currency}`)
    data = {...data, currencyCode: currency}    
    window._pgr('action', 'updateQuoteData', {...data})
})

document.addEventListener('TrustPilotChange', function(arg) {
    const {detail: {displayTrustPilot}} = arg
    console.log(`Trust Pilot Changed: ${displayTrustPilot}`)
    data = {...data, displayTrustPilot: displayTrustPilot === 'true'}    
    window._pgr('action', 'updateQuoteData', {...data})
})