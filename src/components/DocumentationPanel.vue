<template>
  <div>
    <v-card class="mb-4 d-none d-lg-flex" dark>
      <v-card-text class="text-center title">Documentation</v-card-text>
    </v-card>
    <v-expansion-panels accordion dark>
      <v-expansion-panel v-for="section in sections" :key="section.name">
        <v-expansion-panel-header>
          {{ section.name }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list dense>
            <v-subheader v-if="section.props.length > 0"
              >Attributes</v-subheader
            >
            <v-list-item-group>
              <v-list-item v-for="attr in section.props" :key="attr.name">
                <v-list-item-content class="code">{{
                  attr.name
                }}</v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-divider v-if="section.props.length > 0"></v-divider>
            <v-subheader>Methods</v-subheader>
            <v-list-item-group>
              <v-list-item v-for="attr in section.methods" :key="attr.name">
                <v-list-item-content class="code">{{
                  attr.name
                }}</v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          name: "GameObject",
          props: [
            { name: "x", section: "motion" },
            { name: "y", section: "motion" },
            { name: "width", section: "motion" },
            { name: "height", section: "motion" },
            { name: "rotation", section: "motion" },
            { name: "costumeNumber", section: "looks" },
            { name: "layer", section: "looks" },
            { name: "isHidden", section: "looks" },
            { name: "size", section: "looks" }
          ],
          methods: [
            { name: "isTouching()", section: "sensing" },
            { name: "distanceTo()", section: "sensing" }
          ]
        },
        {
          name: "Keyboard",
          props: [],
          methods: [
            { name: "keyDown()", section: "sensing" },
            { name: "keyUp()", section: "sensing" }
          ]
        },
        {
          name: "Mouse",
          props: [
            { name: "x", section: "sensing" },
            { name: "y", section: "sensing" }
          ],
          methods: [
            { name: "clickLeft()", section: "sensing" },
            { name: "clickRight()", section: "sensing" }
          ]
        },
        {
          name: "Game",
          props: [
            { name: "width", section: "sensing" },
            { name: "height", section: "sensing" }
          ],
          methods: [
            { name: "stop()", section: "sensing" },
            { name: "wait()", section: "sensing" }
          ]
        },
        {
          name: "Time",
          props: [
            { name: "gameTime", section: "sensing" },
            { name: "localTime", section: "sensing" },
            { name: "day", section: "sensing" }
          ],
          methods: []
        },
        {
          name: "Math",
          props: [{ name: "sqrt()", section: "sensing" }],
          methods: [
            { name: "random()", section: "sensing" },
            { name: "ceil()", section: "sensing" },
            { name: "floor()", section: "sensing" },
            { name: "round()", section: "sensing" }
          ]
        },
        {
          name: "Sound",
          props: [],
          methods: [
            { name: "load()", section: "sensing" },
            { name: "play()", section: "sensing" },
            { name: "pause()", section: "sensing" },
            { name: "stop()", section: "sensing" },
            { name: "volume", section: "sensing" }
          ]
        }
      ]
    };
  },
  methods: {
    sectionColor: function(section) {
      if (section === "motion") {
        return "blue--text";
      } else if (section === "looks") {
        return "purple--text";
      } else if (section === "sensing") {
        return "teal--text";
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
.code {
  font-family: "Roboto Mono", monospace;
}
</style>
