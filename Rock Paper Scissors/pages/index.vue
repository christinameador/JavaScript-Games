<template>
  <div>
    <header>
      <h1>
        Rock
        <br />Paper
        <br />Scissors
      </h1>
      <div class="score-board">
        <div>
          <h2>Score</h2>
          <span class="score">{{score}}</span>
        </div>
      </div>
    </header>
    <main>
      <div v-if="gameOpen" class="game-pick">
        <div class="rock-wrapper">
          <selection option="rock" @click.native="selection('rock')" />
        </div>
        <div class="paper-wrapper">
          <selection option="paper" @click.native="selection('paper')" />
        </div>
        <div class="scissors-wrapper">
          <selection option="scissors" @click.native="selection('scissors')" />
        </div>
      </div>
      <div v-if="!gameOpen" class="results-grid">
        <div class="results-pick">
          <selection
            aria-disabled="true"
            disabled
            :option="mySelection"
            :class="{winner : compareSelectionResults == 'you win'}"
          />
          <p>You picked</p>
        </div>
        <div class="results">
          <p>{{compareSelectionResults}}</p>
          <button @click="toggleGameState()">Play Again</button>
        </div>
        <div class="results-pick">
          <selection
            aria-disabled="true"
            disabled
            :option="computerSelection"
            :class="{winner : compareSelectionResults == 'you lose'}"
          />
          <p>The house picked</p>
        </div>
      </div>
    </main>
    <button class="rules-trigger" @click="toggleModal()">Rules</button>
    <section
      role="dialog"
      aria-labelledby="dialog1_label"
      aria-modal="true"
      class="rules"
      v-if="showModal"
    >
      <div class="rules-wrapper" tabindex="0">
        <h2 id="dialog_label">Rules</h2>
        <div class="rules-text visually-hidden">
          <ul>
            <li>Rock beats scissors</li>
            <li>Scissors beats paper</li>
            <li>Paper beats rock</li>
          </ul>
        </div>
        <button class="rules-close" @click="toggleModal()">
          <close />
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Selection from "~/components/Selection.vue";
import Close from "~/components/icons/Close.vue";
export default {
  components: { Close, Selection },
  created() {
    if (process.browser) {
      const localStorageForm = localStorage.rps;
      if (localStorageForm) {
        const localStorageFormData = JSON.parse(localStorageForm);
        this.score = localStorageFormData;
      }
    }
  },
  data() {
    return {
      compareSelectionResults: "",
      mySelection: null,
      computerSelection: null,
      gameOpen: true,
      score: 0,
      showModal: false,
      options: [
        { value: "rock", beats: "scissors" },
        { value: "paper", beats: "rock" },
        { value: "scissors", beats: "paper" }
      ]
    };
  },
  methods: {
    compareSelections() {
      if (this.mySelection == this.computerSelection) {
        this.compareSelectionResults = "you tied";
        return;
      }
      this.options.forEach(option => {
        if (
          this.mySelection == option.value &&
          this.computerSelection == option.beats
        ) {
          this.compareSelectionResults = "you win";
        }

        if (
          this.mySelection == option.value &&
          this.computerSelection != option.beats
        ) {
          this.compareSelectionResults = "you lose";
        }
      });

      if (this.compareSelectionResults == "you win") {
        this.score += 1;
      }

      if (this.compareSelectionResults == "you lose") {
        this.score -= 1;
      }
      localStorage["rps"] = this.score;
    },
    selection(value) {
      this.mySelection = value;
      this.computerSelection = this.options[
        Math.floor(Math.random() * 3)
      ].value;
      this.toggleGameState(this.gameOpen);
    },
    toggleGameState(gameOpen) {
      if (!gameOpen) {
        this.mySelection = null;
        this.computerSelection = null;
      }
      this.compareSelectionResults = null;
      this.gameOpen = !this.gameOpen;
      this.compareSelections();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style>
* {
  text-transform: uppercase;
}

section {
  padding: 30px 0;
}

h1,
h3,
p {
  text-shadow: 0 0 2px black;
}

main,
header {
  margin: 0 auto;
  max-width: 705px;
  width: calc(100% - 30px);
}

main {
  align-items: center;
  display: flex;
  height: calc(85vh - 60px);
  justify-content: center;
}

header {
  align-items: center;
  border-radius: var(--border-radius);
  border: var(--header-outline) 0.2rem solid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 15vh;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
}

h1 {
  font-size: 1.4rem;
  line-height: 0.9;
}

.game-pick {
  background-size: contain;
  background: url(/images/bg-triangle.svg) top center no-repeat;
  height: 200px;
  position: relative;
  width: 255px;
}

.game-pick > div {
  position: absolute;
}

.game-pick .rock-wrapper {
  left: 0;
  top: 0;
  transform: translateX(-50%) translateY(-50%);
}

.game-pick .paper-wrapper {
  right: 0;
  top: 0;
  transform: translateX(50%) translateY(-50%);
}

.game-pick .scissors-wrapper {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
}

.results {
  grid-area: 2 / 1 / 3 / 4;
  justify-content: center;
  padding-top: 2rem;
  text-align: center;
}

.results-pick:first-of-type {
  grid-area: 1 / 1 / 2 / 2;
}

.results-pick:last-of-type {
  grid-area: 1 / 3 / 2 / 3;
}

.results p {
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}

.results button {
  align-items: center;
  background-color: #fff;
  border-radius: var(--border-radius);
  border: 0;
  display: inline-flex;
  font-size: 1rem;
  height: 3rem;
  letter-spacing: 1px;
  padding: 0 4rem;
}

.results button:hover {
  color: hsl(349, 71%, 52%);
}

.results-pick p {
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 2rem;
}

.rules-trigger {
  background: rgba(0, 0, 0, 0);
  border-radius: 0.6rem;
  border: var(--header-outline) 0.1rem solid;
  bottom: 1rem;
  color: #fff;
  height: 2.5rem;
  left: 50%;
  letter-spacing: 1px;
  padding: 0 2rem;
  position: absolute;
  transform: translateX(-50%);
}

.rules {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.rules-wrapper {
  background: #fff url(/images/image-rules.svg) center center no-repeat;
  height: 100%;
  position: relative;
  width: 100%;
}

.rules-close,
.rules h2 {
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}

.rules-wrapper h2 {
  color: var(--dark-text);
  display: inline;
  font-size: 1.5rem;
  letter-spacing: 1px;
  top: 5rem;
}

.rules-close {
  background-color: #fff;
  bottom: 5rem;
  height: 20px;
  width: 20px;
}

.score-board {
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  border-radius: var(--border-radius);
  color: black;
  display: flex;
  margin-left: auto;
  padding: 0 2rem;
  text-align: center;
}

.score-board h2 {
  color: var(--score-text);
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 1;
}

.score-board .score {
  color: var(--dark-text);
  font-size: 2.5rem;
  line-height: 1;
}

@media (min-width: 1024px) {
  main {
    max-width: 100%;
    width: calc(100% - 30px);
  }

  .results {
    padding-top: 0;
    text-align: center;
  }

  .results button {
    display: inline-flex;
  }

  .results-grid {
    align-items: center;
    grid-column-gap: 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    max-width: 950px;
    width: 100%;
  }

  .results {
    grid-area: 1 / 2 / 2 / 3;
  }

  .results-pick {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }

  .results-pick button {
    align-self: center;
  }

  .results-pick p {
    margin-bottom: 4rem;
    margin-top: 0;
  }

  .results-pick:first-of-type {
    grid-area: 1 / 1 / 2 / 2;
  }

  .results-pick:last-of-type {
    grid-area: 1 / 3 / 2 / 4;
  }

  h1 {
    font-size: 1.5rem;
  }

  .rules-trigger {
    left: initial;
    right: 1rem;
    transform: initial;
  }

  .rules-wrapper {
    border-radius: var(--border-radius);
    height: 450px;
    position: relative;
    width: 500px;
  }

  .rules-close,
  .rules h2 {
    position: absolute;
    top: 1rem;
    transform: initial;
  }
  .rules h2 {
    left: 2rem;
  }
  .rules-close {
    left: initial;
    right: 2rem;
  }
}
</style>
