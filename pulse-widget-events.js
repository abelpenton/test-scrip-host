(function (P, R, O, t, E, C, T) {
    P[t] = P[t] || function () { (P[t].q = P[t].q || []).push(arguments) };
    C = R.createElement(O), T = R.getElementsByTagName(O)[0];
    C.id = t; C.src = E;
    T.parentNode.insertBefore(C, T);   
}(window, document, 'script', '_pgr', 'https://cdn.jsdelivr.net/gh/abelpenton/test-scrip-host@main/pulse-widget.js'));

let data = {
    totalValue: 100,
    numberOfTickets: 1,
    eventTravelDateTime: new Date(new Date().setMonth(new Date().getMonth() + 1))
}

window._pgr('init', {
    environment: 'test',
    debug: true,
    vendorCode: 'ven_local_6ba3e093c67c428b90670440441469a2',
    currencyCode: 'USD',
    languageCode: 'en',
    eventDateFormat: 'yyyy-MM-ddTHH:mm:ss:FFFFFzzz',
    resetOnUnload: false, // Reset the widget when the page is unloaded (set to true to enable auto-reset)
    useSaleAction: false, // Optional, set this to false if you intend to call our sale endpoint manually
})

document.addEventListener('pg-widget-loaded', function() {
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
    data = {...data, eventTravelDateTime: new Date(eventDate)}    
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

document.addEventListener('ProductChange', function(arg) {
    const {detail: {product}} = arg
    console.log(`Product Change: ${product}`)
    data = {...data, vendorCode: product}
    window._pgr('action', 'updateQuoteData', {...data})
})
