<template>
    <div class="container">
      <div class="bankAccount">
        <NotStonks></NotStonks>
        <Balance></Balance>
        <Stonks></Stonks>
      </div>
      <hr class="line">
      <History>

      </History>
    </div>
</template>

<style>
body {
  background-color: black;
  padding-top: 71px;
  color: white;
}
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .bankAccount {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .line {
    width: 100vw;
    position: fixed;
    left: 0;
  }
</style>

<script>
import Balance from '~/components/balance.vue';
import History from '~/components/history.vue';
import NotStonks from '~/components/notStonks.vue';
import Stonks from '~/components/stonks.vue';

export default {
    name: "IndexPage",
    components: { Stonks, NotStonks, Balance, History }
}
</script>
