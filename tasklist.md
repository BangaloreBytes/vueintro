1.  vuex stores
2.  export const namespaced = true
3.  this.\$route.query.page
4.  this.\$router.push({
    name: 'event-show',
    params: { id: this.event.id }
    })

5.              <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"

    >

        Next-Page

      </router-link>

6.  <router-view :key="$route.fullPath"/>

7.  https://router.vuejs.org/guide/essentials/navigation.html#router-push-location-oncomplete-onabort

8.  https://vuex.vuejs.org/guide/getters.html

9.  https://medium.com/outsystems-experts/beyond-memory-leaks-in-javascript-d27fd48ae67e
