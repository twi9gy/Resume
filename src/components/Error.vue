<template>
    <div class="mt-5 content">
        Whoops 404!! The page is not available.
        <a href="#" @click.prevent="back">Вернуться назад</a>
    </div>
</template>
<script>
    export default {
        name:'Error',
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>
