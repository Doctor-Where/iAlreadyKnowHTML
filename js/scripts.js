var count = 1;

function onCounterClick() {
    count *= 2;
    document.getElementById("counter").textContent = "Counter: " + count;
}