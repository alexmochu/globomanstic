<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12 sm4 offset-sm4>
        <h2>Login to Globomantics</h2>
      </v-flex>
      <v-flex xs12 sm4 offset-sm4>
        <v-text-field
          label="E-main"
          v-model="email"
          :rules="emailRules"
          required/>
        <v-text-field
          label="Password"
          v-model="password"
          :rules="passwordRules"
          type="password"
          required/>
      </v-flex>
      <v-flex xs12 sm4 offset-sm4>
        <v-btn @click="cancel">Cancel</v-btn>
        <v-btn color="primary" @click="login">Login</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :timeout="6000"
      right
      top
    >
      {{ snackbarText }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      snackbar: false,
      snackbarText: 'Hello World!',
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-main is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-main must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password length must be at least 6 characters'
      ]
    }
  },
  methods: {
    login () {
      if (this.password === 'test111') {
        this.snackbarText = 'login complete!'
        this.$router.push({ path: '/' })
      } else {
        this.snackbarText = 'incorrect password!'
      }
      this.snackbar = true
    },
    cancel () {

    }
  }
}
</script>

<style>
</style>
