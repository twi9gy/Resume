<template>
    <div class="mt-1 mb-1">
        <b-card>
            <img class="img-fluid w-100" :src=getImgUrl() style="max-width: 20rem;" />
            <b-list-group flush>
                <b-list-group-item>{{Name}}</b-list-group-item>
                <b-list-group-item>Профессия: {{profession}}</b-list-group-item>
                <b-list-group-item>Возраст: {{age}}</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Resume_card",
        props:['Name', 'profession', 'age', 'imgUrl'],
        methods: {
            getImgUrl: function() {
                try {
                    if (this.imgUrl !== "")
                        return require('../assets/' + this.imgUrl);
                } catch (e) {
                    return "";
                }
            }
        }
    }
</script>

<style scoped>

</style>
