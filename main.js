/**
 * getUrlParameter is a polyfill for browesers that don't support the URLSearchParams spec...
 * @param string name
 */
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Get the query param from the url
const nameOfCheese = getUrlParameter('cheese');

// Log the results
let logString = nameOfCheese ? 'Queried a cheese named '+ nameOfCheese : 'No cheese requested';
console.log(logString);

// Write the result to the page
document.querySelector('#results').innerHTML = logString;
