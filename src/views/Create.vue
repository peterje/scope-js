<template>
  <v-container fluid class="grey darken-3 fill-height">
    <v-row class="fill-height">
      <v-col
        class="primary overflow-hidden docs d-none d-md-flex flex-column"
        cols="2"
        style="max-height: calc(100vh - 88px); "
      >
        <DocumentationPanel></DocumentationPanel>
      </v-col>
      <v-col
        class="primary overflow-y-auto d-flex flex-column"
        style="max-height: calc(100vh - 88px)"
      >
        <CMEditor></CMEditor>
      </v-col>
      <v-col
        style="max-height: calc(100vh - 88px); min-width: 644px"
        class="cols-5 primary d-flex flex-column overflow-y-auto"
      >
        <Stage></Stage>
        <SpriteInfo></SpriteInfo>
        <SpriteSelector></SpriteSelector>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DocumentationPanel from "@/components/DocumentationPanel";
import CMEditor from "@/components/CMEditor";
import Stage from "@/components/Stage";
import SpriteSelector from "@/components/SpriteSelector";
import SpriteInfo from "@/components/SpriteInfo";

export default {
  name: "Create",
  components: {
    CMEditor,
    DocumentationPanel,
    Stage,
    SpriteSelector,
    SpriteInfo
  }
};
</script>

<style scoped>
.docs::-webkit-scrollbar {
  width: 10px;
  background-color: #aaa;
  border-radius: 10px;
}

.docs::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 10px;
}
</style>
