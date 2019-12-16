<template>
  <button :class="option" :disabled="state == 'disabled'">
    <span class="visually-hidden">{{option}}</span>
    <rock v-if="option == 'rock'" />
    <paper v-if="option == 'paper'" />
    <scissors v-if="option == 'scissors'" />
  </button>
</template>

<script>
import Paper from "~/components/icons/Paper.vue";
import Rock from "~/components/icons/Rock.vue";
import Scissors from "~/components/icons/Scissors.vue";
export default {
  components: { Paper, Rock, Scissors },

  props: {
    state: {
      type: String
    },
    option: {
      type: String,
      validator: function(value) {
        return ["rock", "paper", "scissors"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style scoped>
button {
  align-items: center;
  background: #fff;
  border-radius: 100%;
  box-shadow: inset 0 6px 0 #d0d6eb;
  display: inline-flex;
  height: 7rem;
  justify-content: center;
  position: relative;
  transition: all 0.2s;
  width: 7rem;
}

button:hover {
  background-color: #f4f4f4;
}

button svg {
  fill: #3b4262;
}

button::after,
button::before {
  border-radius: 100%;
  content: " ";
  display: block;
  height: 9rem;
  left: -1rem;
  position: absolute;
  top: -1rem;
  width: 9rem;
  z-index: -1;
  box-shadow: 2px 5px 5px black;
}

button.paper::after {
  background-color: hsl(230, 89%, 65%);
  box-shadow: inset 0 -6px 0 hsl(230, 89%, 62%);
}

button.rock::after {
  background-color: hsl(349, 70%, 56%);
  box-shadow: inset 0 -6px 0 hsl(349, 71%, 52%);
}

button.scissors::after {
  background-color: hsl(40, 84%, 53%);
  box-shadow: inset 0 -6px 0 hsl(39, 89%, 49%);
}

button[disabled] {
  pointer-events: none;
}

button.winner::before {
  box-shadow: 2px 5px 3px black, 0 0 0 28px #2b3a59, 0 0 0 56px #263554,
    0 0 0 80px #202f4e;
  z-index: -5;
}

@media (min-width: 1024px) {
  button {
    box-shadow: inset 0 8px 0 #d0d6eb;
    height: 8rem;
    width: 8rem;
  }

  button::after,
  button::before {
    height: 10rem;
    left: -1rem;
    top: -1rem;
    width: 10rem;
    box-shadow: 2px 5px 5px black;
  }

  button.winner::before {
    box-shadow: 2px 5px 6px black, 0 0 0 72px #2b3a59, 0 0 0 135px #263554,
      0 0 0 228px #202f4e;
  }
}
</style>