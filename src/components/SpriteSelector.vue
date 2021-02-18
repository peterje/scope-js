<template>
  <v-sheet
    dark
    class="rounded flex-grow-1 py-2 mt-2 d-flex overflow-y-auto"
  >
    <v-item-group mandatory class="flex-grow-1">
      <v-container class="flex-grow-1">
        <v-row class="flex-grow-1">
          <v-col cols="12" class="d-flex flex-wrap">
            <v-item
              class="mx-2"
              v-for="gameObject in gameObjects"
              :key="gameObject.name"
            >
              <SpriteCard :gameObject="gameObject" />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-dialog
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
      dark
      v-model="dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn light v-bind="attrs" fab class="mr-4" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Add Sprite</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-item-group>
          <v-container class="pt-10">
            <v-row>
              <v-item class="ma-5" v-for="(image, key) in images" :key="key">
                <v-card width="128" flat light hover>
                  <v-img @click="selectSprite(key)" :src="image"></v-img>
                </v-card>
              </v-item>
            </v-row>
          </v-container>
        </v-item-group>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
<script>
import SpriteCard from "@/components/SpriteCard";
import { GameObject } from "@/model/GameObject";
import { mapActions, mapGetters } from "vuex";
import { ProjectGetters } from "@/store/modules/project/getters";
import { ProjectActions } from "@/store/modules/project/actions";
export default {
  components: {
    SpriteCard
  },
  data() {
    return {
      dialog: false,
      images: {}
    };
  },
  mounted() {
    this.importAll(require.context("@/assets/sprites", true, /\.png$/));
  },
  methods: {
    ...mapActions({ addGameObject: ProjectActions.ADD_GAME_OBJECT }),
    importAll(r) {
      r.keys().forEach(key => (this.images[key] = r(key)));
    },
    selectSprite: function(imgPath) {
      this.dialog = false;
      const length = imgPath.indexOf("png") - 11;
      const imgName = imgPath.substr(2, length);
      import("@/assets/sprites/" + imgName + "/mask.json").then(hull => {
        import("@/assets/sprites/" + imgName + "/texture.png").then(img => {
          this.addGameObject(
            new GameObject(img.default, hull.default, "Sprite2")
          );
        });
      });
    }
  },
  computed: {
    ...mapGetters({ gameObjects: ProjectGetters.GET_GAME_OBJECTS })
  }
};
</script>
