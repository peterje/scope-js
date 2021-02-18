<template>
  <codemirror
    style="height: 100%"
    ref="cmEditor"
    v-model="active.script"
    :options="cmOptions"
  >
  </codemirror>
</template>
<script>
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/gruvbox-dark.css";
import "codemirror/theme/idea.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/lib/codemirror.css";
import { codemirror } from "vue-codemirror";
import { mapGetters } from "vuex";
import { ProjectGetters } from "@/store/modules/project/getters";
export default {
  data() {
    return {
      cmOptions: {
        mode: "javascript",
        theme: "gruvbox-dark",
        lineNumbers: true,
        viewportMargin: Infinity,
        line: true,
      }
    };
  },
  computed: {
    ...mapGetters({ active: ProjectGetters.GET_ACTIVE_GAME_OBJECT }),
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  mounted() {
    this.codemirror.setSize("100%", "100%");
  },
  name: "CMEditor",
  components: {
    codemirror
  }
};
</script>

<style></style>
