document.addEventListener("DOMContentLoaded", function () {
    let coins = 301;
    let streaks = 1;
    let tokens = 10;

    function updateUI() {
        document.getElementById("coins").textContent = coins;
        document.getElementById("streak-count").textContent = `${streaks}/2`;
        document.getElementById("token-count").textContent = `${tokens}/200`;
    }

    window.buyStreak = function () {
        if (coins >= 200 && streaks < 2) {
            coins -= 200;
            streaks++;
            updateUI();
        }
    };

    window.buyTokens = function () {
        if (coins >= 200 && tokens <= 190) {
            coins -= 200;
            tokens += 10;
            updateUI();
        }
    };

    updateUI();
});
