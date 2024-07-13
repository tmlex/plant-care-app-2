<script setup lang="ts">
const { user, getActiveUser } = useActiveUser()

const { plants, getPlants } = usePlants()

getPlants()
</script>

<template>
  Hello plants {{ user.username }}
  <div>
    <li v-for="plant in plants">{{ plant.name }}</li>
  </div>
  <v-btn @click="getActiveUser">Get user</v-btn>
</template>
