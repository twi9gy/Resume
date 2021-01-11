<template>
    <div class="container-fluid mt-1 mb-1" v-on:load="load">
        <div class="row">
            <div class="col-1">
                <div class="line h-100 ml-3"></div>
            </div>
            <div class="col-11">
                <div class="row mt-2">
                    <div class="col-4 justify-content-start">
                        <label class="text-left w-100">Уровень:</label>
                    </div>
                    <div class="col-8">
                        <p class="text-left w-100">{{this.getLevel}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label class="text-left w-100">Учебное заведение:</label>
                    </div>
                    <div class="col-8">
                        <p class="text-left w-100">{{this.getInstitution}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label class="text-left w-100">Факультет:</label>
                    </div>
                    <div class="col-8">
                        <p class="text-left w-100">{{this.getFaculty}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label class="text-left w-100">Специализация:</label>
                    </div>
                    <div class="col-8">
                        <p class="text-left w-100">{{this.getSpecialization}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <label class="text-left w-100">Год окончания:</label>
                    </div>
                    <div class="col-8">
                        <p class="text-left w-100">{{this.getYearEnd}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResumeEducation",
        props: ['education'],
        methods:{
            load(){
                console.log(this.education)
            }
        },
        computed : {
            getLevel: function () {
                return this.education.level;
            },
            getInstitution: function () {
                return this.education.institution;
            },
            getFaculty: function () {
                return this.education.faculty;
            },
            getSpecialization: function () {
                return this.education.specialization;
            },
            getYearEnd: function () {
                return this.education.yearEnd;
            }
        }
    }
</script>

<style scoped>
    .line{
        border-left: 1px solid grey;
    }
</style>
