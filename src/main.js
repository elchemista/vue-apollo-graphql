import Vue from 'vue'
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueApollo)

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'https://hmhtoh2rv8.execute-api.eu-central-1.amazonaws.com/api/graphql'
  // uri: 'http://melacloud.it:4001'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
});

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
