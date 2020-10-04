'use strict';


/* Dry Foods

  more exploring

*/


const log = labeledLogger('Dry Foods');
const expect = chai.expect;

const origin = window.location.origin;
const path = '/isolate/fake-api/food/dry/grains.json';
const requestURL = origin + path;
log("requestURL: ", requestURL);


const parseResponse = (response) => {
  const parsedResponse = response.json();
  log('response: ', response, '\n',
    'parsed: ', parsedResponse);
  return parsedResponse;
};
const testGrains = (grains) => {
  log('grains: ', grains);
  it('there should be 5 grains', () => {
    expect(grains).to.deep.equal([
      "wheat",
      "barley",
      "millet",
      "rice",
      "bulgar"
    ]);
  });
};
const handleRejection = (err) => {
  log(err);
};



fetch(requestURL)
  .then(res => parseResponse(res))
  .then(data => testGrains(data))
  .catch(err => handleRejection(err));



log('end of synchronous tasks');
