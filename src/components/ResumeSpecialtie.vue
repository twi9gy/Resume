<template>
    <div class="container-fluid mt-1 mb-1">
        <div class="row">
            <div class="col-1">
                <div class="line h-100 ml-3"></div>
            </div>
            <div class="col-11">
                <div class="row mt-2">
                    <div class="col-5 justify-content-start">
                        <label class="text-left w-100">Занимаемая должность:</label>
                    </div>
                    <div class="col-7">
                        <p class="text-left w-100">{{this.getPositionJob}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <label class="text-left w-100">Специализация:</label>
                    </div>
                    <div class="col-7">
                        <p class="text-left w-100">{{this.getSpecializations}}</p>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-5 justify-content-start">
                        <label class="text-left w-100">Зарплата:</label>
                    </div>
                    <div class="col-7">
                        <p class="text-left w-100">{{this.getSalary}} {{this.getCurrency}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <label class="text-left w-100">Дата вступления в должность:</label>
                    </div>
                    <div class="col-7">
                        <p class="text-left w-100">{{this.getDateEntry}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResumeSpecialtie",
        props:['specialtie'],
        computed : {
            getPositionJob: function () {
                return this.specialtie.position_specialties;
            },
            getSpecializations: function () {
                return this.specialtie.specializations_specialties;
            },
            getDateEntry: function () {
                return this.specialtie.dateentry_specialties;
            },
            getSalary: function () {
                return this.specialtie.salary_specialties;
            },
            getCurrency : function () {
                return this.specialtie.currency_specialties;
            }
        }
    }
</script>

<style scoped>
    .line{
        border-left: 1px solid grey;
    }
</style>
