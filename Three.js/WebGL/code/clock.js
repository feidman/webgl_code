var _0xdac2 = ["\x63\x61\x6E\x76\x61\x73", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x78", "\x79", "\x72\x6F\x74\x61\x74\x69\x6F\x6E", "\x62\x6F\x72\x64\x65\x72\x57\x69\x64\x74\x68", "\x62\x6F\x72\x64\x65\x72\x43\x6F\x6C\x6F\x72", "\x23\x30\x30\x30\x30\x30\x30", "\x66\x69\x6C\x6C", "\x66\x69\x6C\x6C\x43\x6F\x6C\x6F\x72", "\x23\x66\x66\x30\x30\x30\x30", "\x75\x70\x64\x61\x74\x65", "\x63\x74\x78", "\u4F60\u6CA1\u6709\u6307\u5B9A\x63\x74\x78\u5BF9\u8C61\u3002", "\x73\x61\x76\x65", "\x6C\x69\x6E\x65\x57\x69\x64\x74\x68", "\x73\x74\x72\x6F\x6B\x65\x53\x74\x79\x6C\x65", "\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65", "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65", "\x50\x49", "\x72\x6F\x74\x61\x74\x65", "\x64\x72\x61\x77", "\x73\x74\x72\x6F\x6B\x65", "\x72\x65\x73\x74\x6F\x72\x65", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x73\x74\x61\x72\x74", "\x65\x6E\x64", "\x62\x65\x67\x69\x6E\x50\x61\x74\x68", "\x61\x70\x70\x6C\x79", "\x6D\x6F\x76\x65\x54\x6F", "\x6C\x69\x6E\x65\x54\x6F", "\x63\x6C\x6F\x73\x65\x50\x61\x74\x68", "\x72\x61\x64\x69\x75\x73", "\x61\x72\x63", "\x23\x66\x66\x66\x66\x66\x66", "\x23\x33\x33\x33\x33\x33\x33", "\x6F\x72\x61\x6E\x67\x65", "\x63\x6C\x65\x61\x72\x52\x65\x63\x74", "\x66\x69\x6C\x6C\x52\x65\x63\x74", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\x43\x61\x6E\x76\x61\x73\u65E0\u6CD5\u9884\u89C8\x2E\x0A\u8DDF\u6211\u4E00\u8D77\u8BF4\uFF1A\x22\x46\x75\x63\x6B\x20\x49\x6E\x74\x65\x72\x6E\x65\x74\x20\x45\x78\x70\x6C\x6F\x65\x72\x21\x22"];
var canvas;
function clock() {
    canvas = document[_0xdac2[1]](_0xdac2[0]);
    canvas[_0xdac2[2]] = 200;
    canvas[_0xdac2[3]] = 200;
    var _0xd0d2x3 = canvas[_0xdac2[5]](_0xdac2[4]);
    if (_0xd0d2x3) {
        var _0xd0d2x4;
        var _0xd0d2x5 = 60;
        function _0xd0d2x6() {
            this[_0xdac2[6]] = 0;
            this[_0xdac2[7]] = 0;
            this[_0xdac2[8]] = 0;
            this[_0xdac2[9]] = 2;
            this[_0xdac2[10]] = _0xdac2[11];
            this[_0xdac2[12]] = false;
            this[_0xdac2[13]] = _0xdac2[14];
            this[_0xdac2[15]] = function() {
                if (!this[_0xdac2[16]]) {
                    throw new Error(_0xdac2[17]);
                }
                ;
                var _0xd0d2x3 = this[_0xdac2[16]];
                _0xd0d2x3[_0xdac2[18]]();
                _0xd0d2x3[_0xdac2[19]] = this[_0xdac2[9]];
                _0xd0d2x3[_0xdac2[20]] = this[_0xdac2[10]];
                _0xd0d2x3[_0xdac2[21]] = this[_0xdac2[13]];
                _0xd0d2x3[_0xdac2[22]](this[_0xdac2[6]], this[_0xdac2[7]]);
                if (this[_0xdac2[8]]) {
                    _0xd0d2x3[_0xdac2[24]](this[_0xdac2[8]] * Math[_0xdac2[23]] / 180);
                }
                ;
                if (this[_0xdac2[25]]) {
                    this[_0xdac2[25]](_0xd0d2x3);
                }
                ;
                if (this[_0xdac2[12]]) {
                    _0xd0d2x3[_0xdac2[12]]();
                }
                ;
                _0xd0d2x3[_0xdac2[26]]();
                _0xd0d2x3[_0xdac2[27]]();
            };
        }
        ;
        function _0xd0d2x7() {}
        ;
        _0xd0d2x7[_0xdac2[28]] = new _0xd0d2x6();
        _0xd0d2x7[_0xdac2[28]][_0xdac2[12]] = false;
        _0xd0d2x7[_0xdac2[28]][_0xdac2[29]] = [0, 0];
        _0xd0d2x7[_0xdac2[28]][_0xdac2[30]] = [5, 5];
        _0xd0d2x7[_0xdac2[28]][_0xdac2[25]] = function(_0xd0d2x3) {
            _0xd0d2x3[_0xdac2[31]]();
            _0xd0d2x3[_0xdac2[33]][_0xdac2[32]](_0xd0d2x3, this[_0xdac2[29]]);
            _0xd0d2x3[_0xdac2[34]][_0xdac2[32]](_0xd0d2x3, this[_0xdac2[30]]);
            _0xd0d2x3[_0xdac2[35]]();
        };
        function _0xd0d2x8() {}
        ;
        _0xd0d2x8[_0xdac2[28]] = new _0xd0d2x6();
        _0xd0d2x8[_0xdac2[28]][_0xdac2[25]] = function(_0xd0d2x3) {
            _0xd0d2x3[_0xdac2[31]]();
            _0xd0d2x3[_0xdac2[37]](0, 0, this[_0xdac2[36]], 0, 2 * Math[_0xdac2[23]], true);
            _0xd0d2x3[_0xdac2[35]]();
        };
        var _0xd0d2x9 = new _0xd0d2x8();
        _0xd0d2x9[_0xdac2[16]] = _0xd0d2x3;
        _0xd0d2x9[_0xdac2[6]] = 100;
        _0xd0d2x9[_0xdac2[7]] = 100;
        _0xd0d2x9[_0xdac2[36]] = 90;
        _0xd0d2x9[_0xdac2[12]] = true;
        _0xd0d2x9[_0xdac2[9]] = 6;
        _0xd0d2x9[_0xdac2[13]] = _0xdac2[38];
        var _0xd0d2xa = new _0xd0d2x7();
        _0xd0d2xa[_0xdac2[16]] = _0xd0d2x3;
        _0xd0d2xa[_0xdac2[6]] = 100;
        _0xd0d2xa[_0xdac2[7]] = 100;
        _0xd0d2xa[_0xdac2[10]] = _0xdac2[11];
        _0xd0d2xa[_0xdac2[9]] = 10;
        _0xd0d2xa[_0xdac2[8]] = 0;
        _0xd0d2xa[_0xdac2[29]] = [0, 20];
        _0xd0d2xa[_0xdac2[30]] = [0, -50];
        var _0xd0d2xb = new _0xd0d2x7();
        _0xd0d2xb[_0xdac2[16]] = _0xd0d2x3;
        _0xd0d2xb[_0xdac2[6]] = 100;
        _0xd0d2xb[_0xdac2[7]] = 100;
        _0xd0d2xb[_0xdac2[10]] = _0xdac2[39];
        _0xd0d2xb[_0xdac2[9]] = 7;
        _0xd0d2xb[_0xdac2[8]] = 0;
        _0xd0d2xb[_0xdac2[29]] = [0, 20];
        _0xd0d2xb[_0xdac2[30]] = [0, -70];
        var _0xd0d2xc = new _0xd0d2x7();
        _0xd0d2xc[_0xdac2[16]] = _0xd0d2x3;
        _0xd0d2xc[_0xdac2[6]] = 100;
        _0xd0d2xc[_0xdac2[7]] = 100;
        _0xd0d2xc[_0xdac2[10]] = _0xdac2[14];
        _0xd0d2xc[_0xdac2[9]] = 4;
        _0xd0d2xc[_0xdac2[8]] = 0;
        _0xd0d2xc[_0xdac2[29]] = [0, 20];
        _0xd0d2xc[_0xdac2[30]] = [0, -80];
        var _0xd0d2xd = new _0xd0d2x8();
        _0xd0d2xd[_0xdac2[16]] = _0xd0d2x3;
        _0xd0d2xd[_0xdac2[6]] = 100;
        _0xd0d2xd[_0xdac2[7]] = 100;
        _0xd0d2xd[_0xdac2[36]] = 5;
        _0xd0d2xd[_0xdac2[12]] = true;
        _0xd0d2xd[_0xdac2[10]] = _0xdac2[40];
        for (var _0xd0d2xe = 0, _0xd0d2xf = [], _0xd0d2x10; _0xd0d2xe < 12; _0xd0d2xe++) {
            _0xd0d2x10 = _0xd0d2xf[_0xd0d2xe] = new _0xd0d2x7();
            _0xd0d2x10[_0xdac2[16]] = _0xd0d2x3;
            _0xd0d2x10[_0xdac2[6]] = 100;
            _0xd0d2x10[_0xdac2[7]] = 100;
            _0xd0d2x10[_0xdac2[10]] = _0xdac2[40];
            _0xd0d2x10[_0xdac2[9]] = 2;
            _0xd0d2x10[_0xdac2[8]] = _0xd0d2xe * 30;
            _0xd0d2x10[_0xdac2[29]] = [0, -70];
            _0xd0d2x10[_0xdac2[30]] = [0, -80];
        }
        ;
        _0xd0d2x4 = setInterval(function() {
            _0xd0d2x3[_0xdac2[41]](0, 0, 200, 200);
            _0xd0d2x3[_0xdac2[21]] = _0xdac2[40];
            _0xd0d2x3[_0xdac2[42]](0, 0, 200, 200);
            _0xd0d2x9[_0xdac2[15]]();
            for (var _0xd0d2xe = 0; _0xd0d2x10 = _0xd0d2xf[_0xd0d2xe++];) {
                _0xd0d2x10[_0xdac2[15]]();
            }
            ;
            _0xd0d2xa[_0xdac2[8]] = (new Date())[_0xdac2[43]]() * 30;
            _0xd0d2xa[_0xdac2[15]]();
            _0xd0d2xb[_0xdac2[8]] = (new Date())[_0xdac2[44]]() * 6;
            _0xd0d2xb[_0xdac2[15]]();
            _0xd0d2xc[_0xdac2[8]] = (new Date())[_0xdac2[45]]() * 6;
            _0xd0d2xc[_0xdac2[15]]();
            _0xd0d2xd[_0xdac2[15]]();
        }, (1000 / _0xd0d2x5) | 0);
    } else {
        alert(_0xdac2[46]);
    };
};