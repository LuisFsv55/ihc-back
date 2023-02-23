function convertidor( val ) {
    let distance = val / 1.312336;
    return Math.ceil( distance );
}
module.exports = { convertidor }