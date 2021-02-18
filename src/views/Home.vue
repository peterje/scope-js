<template>
  <v-container
    fluid
    class="fill-height primary no-gutters pa-0 d-flex flex-column"
  >
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
  components: {
    Navigation
  }
})
export default class Home extends Vue {}
</script>
