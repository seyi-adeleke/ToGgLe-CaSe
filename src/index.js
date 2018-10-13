module.exports = function toggle(text) {
    if (typeof text !== 'string') {
        return '';
    }
    return text.replace(/_|-|\./g, '').split('').map((letter, index) => {
        if (index % 2 === 0) {
            return letter.toUpperCase();
        }
        return letter.toLowerCase();
    }).join('')
        .trim();
};
