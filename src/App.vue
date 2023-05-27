<template>
  <v-app>
    <v-content>
      <MyCalendar />
    </v-content>
  </v-app>
</template>

<script>
import MyCalendar from './components/MyCalendar';

export default {
  name: 'App',
  components: {
    MyCalendar,
  },
  data: () => ({
    //
  }),
};
</script>