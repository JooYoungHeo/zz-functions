const {expect} = require('chai');
const alterDate = require('../src/alterDate');

describe('alter date test', () => {

    const regex = /^\d{2}\:\d{2}\:\d{2}$/;

    it('case 1', () => {
        const input = "PM 01:00:00";
        const N = 10;
        const result = alterDate(input, N);
        
        expect(result).to.match(regex);
        expect(result).to.eq("13:00:10");
    });

    it('case 2', () => {
        const input = "PM 11:59:59";
        const N = 1;
        const result = alterDate(input, N);

        expect(result).to.match(regex);
        expect(result).to.eq("00:00:00");
    });

    it('case 3', () => { 
        const input = "AM 12:10:00";
        const N = 40;
        const result = alterDate(input, N);

        expect(result).to.match(regex);
        expect(result).to.eq("00:10:40");
    });

    it('case 4', () => {
        const input = "AM 05:24:03";
        const N = 102392;
        const result = alterDate(input, N);

        expect(result).to.match(regex);
        expect(result).to.eq("09:50:35");
    });
});