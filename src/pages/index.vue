<script setup lang="ts">
const { user } = useActiveUser()
</script>

<template>
  Hello {{ user.username }}
  <v-btn>Test</v-btn>
</template>
