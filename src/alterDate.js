const AM = "AM";
const PM = "PM";

const alterDate = (input, N) => {
    const timeList = removeMeridiem(input);
    const [h, m, s] = calculateTime(...timeList, N);

    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
};

function removeMeridiem(input) {
    const [meridiem, time] = input.split(' ');
    let [h, m, s] = time.split(':').map(item => Number(item));

    if (meridiem === PM && h !== 12) h+= 12;
    if (meridiem === AM && h === 12) h = 0; 

    return [h, m, s];
}

function calculateTime(h, m, s, N) {
    h += Math.floor(N/3600), N %= 3600;
    m += Math.floor(N/60);
    s += Math.floor(N%60);

    if (s >= 60) {
        s -= 60;
        m += 1;
    }
    if (m >= 60) {
        m -= 60;
        h += 1;
    }
    if (h >= 24) {
        h -= 24;
    }

    return [h, m, s];
}

module.exports = alterDate;