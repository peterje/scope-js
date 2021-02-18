<template>
  <v-card
    @click="select(gameObject)"
    :ripple="false"
    width="64px"
    class="d-flex sprite-card ma-2"
    flat
  >
    <v-container :class="cardStyle" class="flex-grow-1 d-flex flex-column pa-0">
      <v-btn
        v-if="isSelected"
        @click="remove(gameObject)"
        x-small
        fab
        class="delete-button"
        color="primary"
      >
        <v-icon medium class="delete-icons">mdi-delete-forever</v-icon>
      </v-btn>
      <v-row cols="12" justify="center">
        <v-img
          class="mx-4 my-4"
          max-height="32"
          max-width="32"
          :src="gameObject.imgPath"
        ></v-img>
      </v-row>
      <v-row
        :class="textStyle"
        cols="12"
        class="ma-0 sprite-text justify-center"
      >
        {{ gameObject.name }}
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { GameObject } from "@/model/GameObject";
import { mapActions, mapGetters } from "vuex";
import { ProjectActions } from "@/store/modules/project/actions";
import { ProjectGetters } from "@/store/modules/project/getters";

export default {
  props: {
    gameObject: GameObject,
    thumbnail: String
  },
  methods: {
    ...mapActions({
      select: ProjectActions.SELECT_GAME_OBJECT,
      remove: ProjectActions.DEL_GAME_OBJECT
    })
  },
  computed: {
    ...mapGetters({ selectedSprite: ProjectGetters.GET_ACTIVE_GAME_OBJECT }),
    isSelected: function() {
      return this.gameObject === this.selectedSprite;
    },
    cardStyle: function() {
      return {
        "selected-sprite-card": this.isSelected,
        "unselected-sprite-card": !this.isSelected
      };
    },
    textStyle: function() {
      return { "selected-text": this.isSelected };
    }
  }
};
</script>

<style scoped>
.spriteImg {
  cursor: pointer;
}
.sprite-card-wrapper {
  border-radius: 10px !important;
}
.selected-sprite-card {
  box-shadow: 0px 0px 0px 4px hsla(215, 100%, 65%, 0.35);
  border: 2px solid hsla(215, 100%, 65%, 1);
  background: hsla(0, 100%, 100%, 1);
  border-radius: 10px !important;
}
.unselected-sprite-card {
  color: hsla(225, 15%, 40%, 1);
  border-width: 2px;
  border-radius: 10px !important;
  border-style: solid;
  border-color: hsla(0, 0%, 0%, 0.15);
}
.sprite-text {
  font-size: small;
}
.selected-text {
  background: hsla(215, 100%, 65%, 1);
  border-radius: 0px 0px 5px 5px !important;
  color: hsla(0, 100%, 100%, 1);
}
.delete-button {
  position: absolute;
  right: -10px;
  top: -10px;
  width: 30px;
  height: 30px;
}
</style>
