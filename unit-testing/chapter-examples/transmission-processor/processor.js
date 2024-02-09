function processor(transmission){
    if (transmission.indexOf('::') < 0){
        return -1;
    }
    
    let parts = transmission.split('::');
    let rawData = parts[1];
    let notNumberId = parts[0];

    if(parts.length > 2){
        return -1;
    }

    if (rawData[0] !== '<'){
        rawData = -1;
    }

    if (rawData[1] !== ' '){
        rawData = -1;
    }

    if (typeof notNumberId !== Number){
        notNumberId = -1;
    }

    return {
       id : Number(parts[0]),
       rawData : rawData,
       notNumberId : notNumberId
    }
   // return {};
}

module.exports = processor;