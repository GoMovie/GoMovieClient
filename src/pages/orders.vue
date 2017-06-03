<template>
  <div class="orders">
    <confirm-item v-for="order in orders" :orderInfo="order" class="orders__item" :key="order.id"></confirm-item>
  </div>
</template>

<script>
export default {
  name: 'orders',
  data () {
    return {
    }
  },
  computed: {
    orders: function () {
      return this.$store.state.orders
    }
  },
  components: {
    'confirm-item': require('../components/confirm-order/confirm-item.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orders {
  margin: 0 auto;
}

.orders__item {
  margin-bottom: 30px;
}
</style>
