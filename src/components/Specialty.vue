<template>
    <!-- Блок специаности -->
    <div class="container specialtie_block">
        <!-- Блок с занимаемой должностью -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Занимаемая должность</label>
            </div>
            <div class="col-6">
                <input v-model="specialty.position_specialties" class="form-control" placeholder="Должность">
            </div>
        </div>
        <!-- Конец блока с занимаемой должностью -->
        <!-- Блок специализации -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Специализация</label>
            </div>
            <div class="col-6">
                <input v-model="specialty.specializations_specialties" class="form-control" placeholder="Специализация">
            </div>
        </div>
        <!-- Конец блока специализации -->
        <!-- Блок зарплаты -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Зарплата</label>
            </div>
            <div class="col-6">
                <div class="d-flex">
                    <input type="text" class="form-control" placeholder="Число" v-model="specialty.salary_specialties">
                    <b-form-select v-model="specialty.currency_specialties" :options="currency_options"></b-form-select>
                </div>
            </div>
        </div>
        <!-- Конец блока зарплаты -->
        <!-- Блок даты вступления в должность -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Дата вступления в должность</label>
            </div>
            <div class="col-6">
                <input type="date" v-model="specialty.dateentry_specialties" class="form-control" placeholder="Дата вступления в должность">
            </div>
        </div>
        <!-- Конец блока даты вступления в должность -->

        <!-- Кнопка для удаления специальности, которая посылает родителю объект, который надо удалить -->
        <div class="row mt-2 mb-2">
            <div class="col">
                <button class="btn btn-danger" v-on:click="$emit('deleteSpecialtie', specialtie)">Удалить специальность</button>
            </div>
        </div>

    </div>
    <!-- Конец блока специаности -->
</template>

<script>
    export default {
        name: "Specialty",
        props:['specialty', 'currency'],
        data(){
            return{
                currency_options:[
                    { value: 'РУБ', text: 'РУБ' },
                    { value: 'USD', text: 'USD' },
                    { value: 'EUR', text: 'EUR'}
                ]
            }
        },
        methods: {
            checkEdit_specialty: function (newVal, OldVal) {
                if(newVal !== OldVal) {
                    if (OldVal === '' && this.specialty.id_specialties === ''){
                        this.specialty.is_edit = true;
                    } else if (this.specialty.id_specialties !== '' && OldVal !== '') {
                        this.specialty.is_edit = true;
                    }
                }
            }
        },
        watch: {
            "specialty.position_specialties": function (newVal, OldVal) {
                this.checkEdit_specialty(newVal, OldVal);
            },
            "specialty.specializations_specialties": function (newVal, OldVal) {
                this.checkEdit_specialty(newVal, OldVal);
            },
            "specialty.currency_specialties": function (newVal, OldVal) {
                this.checkEdit_specialty(newVal, OldVal);
            },
            "specialty.dateentry_specialties": function (newVal, OldVal) {
                this.checkEdit_specialty(newVal, OldVal);
            },
            "specialty.salary_specialties": function (newVal, OldVal) {
                this.checkEdit_specialty(newVal, OldVal);
            },
        }
    }
</script>

<style scoped>
    .specialtie_block{
        border-bottom: 1px solid black;
    }
</style>
