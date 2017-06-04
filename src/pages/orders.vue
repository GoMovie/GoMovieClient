<template>
  <div class="orders">
    <confirm-item class="orders__item" v-for="order in orders" :orderInfo="order" :key="order.id">
    </confirm-item>
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

<style scoped>
.orders {
  margin: 110px auto 0 auto;
}

.orders__item {
  margin: 20px auto;
}
</style>
