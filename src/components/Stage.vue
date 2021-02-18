<template>
  <div>
    <v-sheet rounded class="d-flex justify-space-around pa-2 mb-2" dark>
      <v-btn
        @click="gameStart"
        :disabled="this.gameStarted"
        color="success"
        dark
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn @click="gameStop" :disabled="!this.gameStarted" color="error" dark>
        <v-icon>mdi-stop</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet
      dark
      rounded
      id="canvasWrap"
      class="d-flex justify-center grow-0 overflow-x-hidden"
    >
      <canvas id="canvas" width="600" height="400"></canvas>
    </v-sheet>
  </div>
</template>

<script>
import * as PIXI from "pixi.js";
import { mapGetters } from "vuex";
import { ProjectGetters } from "@/store/modules/project/getters";
export default {
  name: "Stage",
  data: () => {
    return {
      gameStarted: false,
      gameWidth: 640,
      gameHeight: 480
    };
  },
  methods: {
    gameStart: function() {
      this.gameStarted = true;
      for (const go of this.gameObjects) {
        this.app.stage.addChild(go.sprite);
      }
    },
    gameStop: function() {
      this.gameStarted = false;
      console.log("stopped");
    }
  },
  mounted() {
    const view = document.getElementById("canvas");
    this.app = new PIXI.Application({
      view: view,
      width: this.gameWidth,
      height: this.gameHeight
    });
  },
  computed: {
    ...mapGetters({ gameObjects: ProjectGetters.GET_GAME_OBJECTS })
  }
};
</script>

<style scoped></style>
