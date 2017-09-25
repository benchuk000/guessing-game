class GuessingGame {
    constructor() {
        this.values = null;
        this.guessValue = null;
        this.a = 0;
        this.b = 0;
    }

    setRange(min, max) {
        this.values = (new Array(max-min)).fill(min).map((item, index) => index ? item[index - 1] + 1: item);
        this.a = min;
        this.b = max;
    }

    guess() {
        this.guessValue = Math.round((this.a + this.b) / 2);

        return this.guessValue;
    }

    lower() {
        this.b = this.guessValue;

        this.values = this.values.slice(0, this.values.indexOf(this.guessValue));
    }

    greater() {
        this.a = this.guessValue;

        this.values = this.values.slice(this.values.indexOf(this.guessValue), this.values.length);
    }
}

module.exports = GuessingGame;