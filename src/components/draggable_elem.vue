<template>
    <div>
        <h4 class="text-center">{{title}} ({{list.length}})</h4>
        <draggable :list="list" group="resume" @change="changeStatus">
            <div
                    v-for="(element, index) in list"
                    :key="index"
            >
                <router-link :to="{name: 'edit', params: {id: element.id_resume}}" class="text-decoration-none">
                    <Resume_card
                            v-bind:Name="element.firstname_resume + ' ' + element.secondname_resume"
                            v-bind:profession="element.profession_resume"
                            v-bind:age="getAge(element.birthday_resume)"
                            v-bind:img-url="element.imgurl_resume"
                    ></Resume_card>
                </router-link>
            </div>
        </draggable>
    </div>
</template>

<script>
    import draggable from "vuedraggable/src/vuedraggable";
    import Resume_card from "./Resume_card";
    export default {
        name: "draggable_elem",
        components: {Resume_card, draggable},
        props:['title', 'list', 'new_resume', 'interview_resume', 'accept_resume', 'failure_resume'],
        methods: {
            getAge: function (birthday) {
                let dateValue = new Date(birthday);
                let age = Math.abs(
                    new Date(
                        Date.now() - dateValue
                    ).getUTCFullYear() - 1970
                );
                return age;
            },
            changeStatus: function(e) {
                let add = e.added;
                if (typeof add !== "undefined") {
                    // поиск элемента в массивах объектов
                    let new_status = null;
                    let el = this.new_resume.find(x=> x.id_resume === add.element.id_resume);
                    if(typeof el !== "undefined"){
                        new_status = 'Новый';
                    }
                    el = this.interview_resume.find(x=> x.id_resume === add.element.id_resume);
                    if(typeof el !== "undefined"){
                        new_status = 'Назначено собеседование';
                    }
                    el = this.accept_resume.find(x=> x.id_resume === add.element.id_resume);
                    if(typeof el !== "undefined"){
                        new_status = 'Принят';
                    }
                    el = this.failure_resume.find(x=> x.id_resume === add.element.id_resume);
                    if(typeof el !== "undefined"){
                        new_status = 'Отказ';
                    }

                    this.axios({
                        method: 'POST',
                        url: 'http://api/cv/' + add.element.id_resume + '/status/edit',
                        data: {
                            status_resume: new_status
                        },
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    }).then(response => (alert(response.data.message)));
                }
            },
        }
    }
</script>

<style scoped>
    a{
        color: black;
    }
</style>
