var input = "100.64";
var lines = input.split('\n');

function circleArea(r) {
    r = parseFloat(lines, 10);
    const result =  3.14159 * (r ** 2);

    console.log(`A=${result.toFixed(4)}`);
}

circleArea();