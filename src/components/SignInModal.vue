<template>
  <v-window-item :value="1" class="ma-0 fill-height">
    <v-row>
      <v-col cols="8" class="white">
        <v-card-text>
          <h1 class="text-center pb-10 text-uppercase font-weight-thin">
            sign in
          </h1>
          <div class="text-center">
            <v-btn @click="signInWithGoogle" fab outlined class="mx-5">
              <v-icon>fa-google</v-icon>
            </v-btn>
          </div>
          <v-form class="pa-5">
            <v-text-field
              v-model="email"
              label="Email"
              name="email"
              prepend-icon="fa-envelope"
              type="text"
              color="accent"
            />
            <v-text-field
              v-model="password"
              label="Password"
              name="password"
              prepend-icon="fa-lock"
              type="password"
              color="accent"
            />
          </v-form>
          <div class="text-center" v-if="errorMessage">{{ errorMessage }}</div>
          <div class="text-center pb-10">
            <v-btn
              @click="
                signInWithEmailAndPassword({ email: email, password: password })
              "
              rounded
              outlined
              >Sign In</v-btn
            >
          </div>
          <div class="text-center font-weight-medium text-uppercase">
            reset password
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="4" class="secondary">
        <v-card-text>
          <h1
            class="text-center pb-10 text-uppercase font-weight-thin white--text"
          >
            first time?
          </h1>
        </v-card-text>
        <div class="text-center fill-height pt-15 mt-13">
          <v-btn rounded color="white" filled outlined x-large @click="onClick">
            Sign Up</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-window-item>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthActions } from "@/store/modules/auth/actions";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  name: "SignInModal",
  computed: {
    ...mapGetters({ errorMessage: "getError" })
  },
  methods: {
    ...mapActions({
      signInWithProvider: AuthActions.SIGN_IN_OAUTH,
      signInWithEmailAndPassword: AuthActions.SIGN_IN_EMAIL,
      updateMsg: AuthActions.SET_ERROR_MSG
    }),
    signInWithGoogle: function() {
      this.signInWithProvider(new firebase.auth.GoogleAuthProvider());
    },
    onClick: function() {
      this.updateMsg("");
      this.$emit("update:step", this.step + 1);
    }
  }
};
</script>

<style scoped></style>
