import zpad from '../src/index';

// Zero's
zpad(16, 4); // 0016
zpad(16, 2); // 16
zpad(2, 2); // 02

// Other characters
zpad(16, 3, 'X'); // X16
zpad(16, 6, 'Y'); // YYYY16

// Hex
zpad((16).toString(16), 4); // 0010
zpad((16).toString(16), 2); // 10
