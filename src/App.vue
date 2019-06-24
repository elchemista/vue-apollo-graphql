<template>
  <div id="app">
    <ul id="tasks">
      <li v-for="item in allTasks" v-bind:key="item.idtask">
        {{ item.idtask }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'app',
  data: function() {
    return {
      allTasks: {}
    };
	},
  apollo: {
		allTasks: {
      query: gql `
        { 
          allTasks {
              idtask
          }
        }`,
      fetchPolicy: 'no-cache'
		}
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
