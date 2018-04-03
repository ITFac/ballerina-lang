package a.b;

public function Fn1() returns (function (int, int) returns (int)) {
    return privateFunc1;
}

public function Fn2() returns (function (int, int) returns (int)) {
    return (int a, int b) => (int) {
                return a + b;
           };
}

function privateFunc1 (int a, int b) returns (int) {
    return a + b;
}
