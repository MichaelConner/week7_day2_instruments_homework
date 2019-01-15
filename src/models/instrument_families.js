const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(instruments) {
  this.instruments = instruments;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('Instruments:all-instruments-ready', this.instruments)

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedInstrumentName = evt.detail;
    const selectedInstrumentObject = this.findByName(selectedInstrumentName);
    PubSub.publish('Instruments:selected-instrument-ready', selectedInstrumentObject);
  });
};

InstrumentFamilies.prototype.findByName = function (searchInstrument) {
  const foundInstrument = this.instruments.find((currentInstrument) => {
    return currentInstrument.name === searchInstrument
  });
  return foundInstrument
};

module.exports = InstrumentFamilies;
