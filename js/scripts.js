var count = 0;

function onCounterClick() {
    count += 1;
    document.getElementById("counter").textContent = "Counter: " + count;
}