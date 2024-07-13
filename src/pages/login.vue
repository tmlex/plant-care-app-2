<script setup lang="ts"></script>

<template>
  <h1>Login</h1>
  <v-btn :href="`${APP_CONFIG.apiBaseUrl}/users/login/google`">Sign in with Google</v-btn>
</template>
