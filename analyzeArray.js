function analyzeArray(arr) {
    const average = array => array.reduce((a, b) => a + b) / array.length;

    return {
        average: average(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

module.exports = analyzeArray
