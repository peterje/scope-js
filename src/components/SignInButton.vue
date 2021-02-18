<template>
  <v-dialog max-width="800px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text color="grey" v-on="on" v-bind="attrs">
        <span>Sign In</span>
      </v-btn>
    </template>
    <v-card color="secondary">
      <v-window v-model="step" class="fill-height">
        <SignInModal @close="dialog = false" :step.sync="step"></SignInModal>
        <RegisterModal
          @close="dialog = false"
          :step.sync="step"
        ></RegisterModal>
      </v-window>
    </v-card>
  </v-dialog>
</template>

<script>
import RegisterModal from "@/components/RegisterModal";
import SignInModal from "@/components/SignInModal";
import { mapGetters } from "vuex";
export default {
  components: { RegisterModal, SignInModal },
  data() {
    return {
      step: 0,
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  watch: {
    isLoggedIn: function(newVal) {
      if (newVal) {
        this.dialog = false;
      }
    }
  }
};
</script>

<style scoped></style>
