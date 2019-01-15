const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
    console.log(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  console.log(instrument);
  const familyHeader = document.createElement('h1');
  familyHeader.textContent = `${instrument.name}`;
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrument.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(familyHeader);
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentInfoView;
