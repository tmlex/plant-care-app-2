<script setup lang="ts"></script>

<template>
  Hello!
  <v-btn>Test</v-btn>
  <v-treeview
    item-title="title"
    item-value="id"
    item-children="children"
    :items="[{ id: 'test', title: 'test', children: [{ id: 'test', title: 'test' }] }]"
  ></v-treeview>
</template>
