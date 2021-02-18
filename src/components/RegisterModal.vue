<template>
  <v-window-item :value="2" class="fill-height">
    <v-row class="secondary fill-height">
      <v-col cols="4" class="secondary d-flex flex-column">
        <div
          class="text-center fill-height d-flex align-center justify-center flex-column"
        >
          <v-card-text>
            <h1
              class="text-center pb-10 text-uppercase font-weight-thin white--text"
            >
              Signed Up?
            </h1>
          </v-card-text>
          <v-btn rounded color="white" filled outlined x-large @click="onClick"
            >Sign In</v-btn
          >
        </div>
      </v-col>
      <v-col cols="8" class="white">
        <v-card-text>
          <h1 class="text-center pb-10 text-uppercase font-weight-thin">
            sign up
          </h1>
          <v-form class="pa-5">
            <v-text-field
              label="Username"
              name="username"
              prepend-icon="fa-user-circle"
              type="text"
              color="accent"
              v-model="username"
            />
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="fa-envelope"
              type="text"
              color="accent"
              v-model="email"
            />
            <v-text-field
              label="Password"
              name="password"
              prepend-icon="fa-lock"
              type="password"
              color="accent"
              v-model="password"
            />
            <v-text-field
              label="Confirm Password"
              name="password-confirm"
              prepend-icon="fa-lock"
              type="password"
              color="accent"
            />
          </v-form>
          <div class="text-center red--text font-weight-bold">
            {{ errorMessage }}
          </div>
          <div class="text-center pb-10">
            <v-btn
              rounded
              outlined
              @click="signUpWithEmail({ email: email, password: password })"
              >Sign Up</v-btn
            >
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-window-item>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { AuthActions } from "@/store/modules/auth/actions";
export default {
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({ errorMessage: "getError" })
  },
  methods: {
    ...mapActions({ signUpWithEmail: AuthActions.SIGN_UP_EMAIL , updateMsg: AuthActions.SET_ERROR_MSG}),
    onClick: function() {
      this.updateMsg("");
      this.$emit("update:step", this.step - 1);
    }
  }
};
</script>

<style scoped></style>
