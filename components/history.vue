<template>
    <div class="history">
        <h2 class="historuTitle">History</h2>
        <div class="historyWrapper">
            <div class="container historyContainer">
                <HistoryItem></HistoryItem>
            </div>
        </div>
    </div>
</template>

<script>
import HistoryItem from './historyItem.vue';

export default {
    components: { HistoryItem }
}
</script>

<style scoped>
.historuTitle {
    font-size: 48px;
    margin-bottom: 40px;
}

.historyWrapper {
    width: 100%;
    height: 490px;
    border: 3px solid #FFFFFF;
    border-radius: 10px;
    padding-top: 50px;
}

.historyContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>