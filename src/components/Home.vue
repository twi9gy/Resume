<template>
    <div class="main content">
        <div class="container-fluid mt-5 pt-4">
            <div class="row">
                <div class="col-3">
                    <Draggable_elem
                            v-bind:title="'Новый'"
                            v-bind:list="new_resume"
                            v-bind:accept_resume="accept_resume"
                            v-bind:failure_resume="failure_resume"
                            v-bind:interview_resume="interview_resume"
                            v-bind:new_resume="new_resume"
                    ></Draggable_elem>
                </div>
                <div class="col-3">
                    <Draggable_elem
                            v-bind:title="'Назначено собеседование'"
                            v-bind:list="interview_resume"
                            v-bind:accept_resume="accept_resume"
                            v-bind:failure_resume="failure_resume"
                            v-bind:interview_resume="interview_resume"
                            v-bind:new_resume="new_resume"
                    ></Draggable_elem>
                </div>
                <div class="col-3">
                    <Draggable_elem
                            v-bind:title="'Принят'"
                            v-bind:list="accept_resume"
                            v-bind:accept_resume="accept_resume"
                            v-bind:failure_resume="failure_resume"
                            v-bind:interview_resume="interview_resume"
                            v-bind:new_resume="new_resume"
                    ></Draggable_elem>
                </div>
                <div class="col-3">
                    <Draggable_elem
                            v-bind:title="'Отказ'"
                            v-bind:list="failure_resume"
                            v-bind:accept_resume="accept_resume"
                            v-bind:failure_resume="failure_resume"
                            v-bind:interview_resume="interview_resume"
                            v-bind:new_resume="new_resume"
                    ></Draggable_elem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Draggable_elem from "./draggable_elem";
    export default {
        name: "Home",
        components: {Draggable_elem},
        props:['resume'],
        data(){
            return{
                new_resume: [],
                interview_resume: [],
                accept_resume: [],
                failure_resume: []
            }
        },
        mounted() {
            // Получение всех резюме
            this.axios.get('http://api/cv').then(response => (
                this.new_resume = this.Condition_new(response.data)
            ));
            this.axios.get('http://api/cv').then(response => (
                this.interview_resume = this.Condition_interview(response.data)
            ));
            this.axios.get('http://api/cv').then(response => (
                this.accept_resume = this.Condition_accept(response.data)
            ));
            this.axios.get('http://api/cv').then(response => (
                this.failure_resume = this.Condition_failure(response.data)
            ));
        },
        methods: {
            Condition_new:function (resumes) {
                function condition(value) {
                    var result = false;
                    if (value.status_resume === 'Новый') {
                        result = true;
                    }
                    return result;
                }
                return  resumes.filter(condition);
            },
            Condition_interview:function (resumes) {
                function condition(value) {
                    var result = false;
                    if (value.status_resume === 'Назначено собеседование') {
                        result = true;
                    }
                    return result;
                }
                return  resumes.filter(condition);
            },
            Condition_accept:function (resumes) {
                function condition(value) {
                    var result = false;
                    if (value.status_resume === 'Принят') {
                        result = true;
                    }
                    return result;
                }
                return  resumes.filter(condition);
            },
            Condition_failure:function (resumes) {
                function condition(value) {
                    var result = false;
                    if (value.status_resume === 'Отказ') {
                        result = true;
                    }
                    return result;
                }
                return  resumes.filter(condition);
            }
        }
    }
</script>

<style scoped>

</style>
