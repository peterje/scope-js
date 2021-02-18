<template>
  <v-app-bar app dark>
    <v-spacer></v-spacer>
    <v-toolbar-title class="text-uppercase">
      <v-btn to="/" text x-large>
        <span class="font-weight-light">Scope</span>
        <span>JS</span>
      </v-btn>
    </v-toolbar-title>
    <v-btn text color="grey" to="/create">
      <span>Create</span>
    </v-btn>
    <v-btn text color="grey" to="/explore">
      <span>Explore</span>
    </v-btn>
    <v-spacer></v-spacer>
    <SignInButton v-if="!isLoggedIn"></SignInButton>
    <v-btn @click="signOut" v-if="isLoggedIn" accent text color="grey">
      <span>Sign Out</span>
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
import SignInButton from "@/components/SignInButton";
import { mapGetters } from "vuex";
import firebase from "firebase/app";
export default {
  name: "Navigation",
  components: {
    SignInButton
  },
  methods: {
    signOut: function() {
      firebase.auth().signOut();
    }
  },
  computed: {
    ...mapGetters({ isLoggedIn: "isLoggedIn", user: "getUser" })
  }
};
</script>

<style scoped></style>
