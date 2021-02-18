<template>
  <v-sheet
    dark
    rounded
    class="align-center d-flex align-content-center flex-grow-0 mt-4 d-lg-none d-xl-flex"
  >
    <v-container class="flex-grow-1 d-flex">
      <v-row class="flex-grow-1 d-flex justify-center">
        <v-col cols="6">
          <v-text-field
            v-model="active.name"
            hide-details="auto"
            label="Name"
            dense
            rounded
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="active.sprite.x"
            hide-details="auto"
            label="x"
            dense
            rounded
            filled
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="v-grow-1">
          <v-text-field
            v-model="active.sprite.y"
            hide-details="auto"
            label="y"
            dense
            rounded
            filled
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
import { ProjectGetters } from "@/store/modules/project/getters";

export default {
  name: "SpriteInfo",
  computed: {
    ...mapGetters({ active: ProjectGetters.GET_ACTIVE_GAME_OBJECT }),
    getName: function() {
      if (this.active) {
        return this.active.name;
      }
      return "";
    },
    getX: function() {
      if (this.active) {
        return this.active.sprite.x;
      }
      return "";
    },
    getY: function() {
      if (this.active) {
        return this.active.sprite.y;
      }
      return "";
    }
  }
};
</script>

<style scoped></style>
