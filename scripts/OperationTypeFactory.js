'use strict';
//运算原型
var Operation = {
    first: 0,
    second: 0,
    result: 0
};

//各种运算对象
var Add = {
    get: function (num1, num2) {
        var i = accurate(num1, num2);
        Operation.result = ((num1 * i + num2 * i) / i).toFixed(6);
    },
    __proto__: Operation
};
var Sub = {
    get: function (num1, num2) {
        var i = accurate(num1, num2);
        Operation.result = ((num1 * i - num2 * i) / i).toFixed(6);
    },
    __proto__: Operation
};

var Multi = {
    get: function (num1, num2) {
        var i = accurate(num1, num2);
        Operation.result = (((num1 * i) * (num2 * i)) / Math.pow(i, 2)).toFixed(6);
    },
    __proto__: Operation
};

var Div = {
    get: function (num1, num2) {
        if (num1 === 0) {
            alert("被除数不能为0");
            return;
        }
        var i = accurate(num1, num2);
        Operation.result = (((num1 * i) / (num2 * i))).toFixed(6);
    },
    __proto__: Operation
};

var Pow = {
    get: function (num1, num2) {
        Operation.result = Math.pow(num1, num2);
    },
    __proto__: Operation
};

var Sqrt = {
    get: function (num1, num2) {
        Operation.result = Math.sqrt(num1);
    },
    __proto__: Operation
};

var Sin = {
    get: function (num1, num2) {
        var a = (Math.PI / 180) * num1;
        Operation.result = Math.sin(a);
    },
    __proto__: Operation
};

var Cos = {
    get: function (num1, num2) {
        var b = (Math.PI / 180) * num1;
        Operation.result = Math.cos(b);
    },
    __proto__: Operation
};

var Mod = {
    get: function (num1, num2) {
        Operation.result = num1 % num2;
    },
    __proto__: Operation
};

//运算对象工厂
var operationFactory = {
    produce: function (math) {
        switch (math) {
            case '+':
                Main.computer = Add;
                break;
            case '-':
                Main.computer = Sub;
                break;
            case 'X':
                Main.computer = Multi;
                break;
            case '/':
                Main.computer = Div;
                break;
            case '^':
                Main.computer = Pow;
                break;
            case '#':
                Main.computer = Sqrt;
                break;
            case 'sin':
                Main.computer = Sin;
                break;
            case 'cos':
                Main.computer = Cos;
                break;
            case '%':
                Main.computer = Mod;
                break;
        }
    },
    __proto__: Operation
};

//解决浮点数运算不精确问题
function accurate(a1, a2) {
    var n1 = 0, n2 = 0, m = 1;
    try{
        n1 = a1.toString().split(".")[1].length;
    }catch (e){

    }
    try {
        n2 = a2.toString().split(".")[1].length;
    }catch (e){

    }
    m = Math.pow(10, Math.max(n1, n2));
    return m;
}