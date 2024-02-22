var count = 1;
var power = 0;

function onCounterClick() {
    count *= 2;
    power += 1;
    document.getElementById("counter").textContent = "2 to the power of " + power + ": " + count;
}