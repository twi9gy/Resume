<template>
    <!-- Блок специаности -->
    <div class="container specialtie_block">
        <!-- Блок с занимаемой должностью -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Занимаемая должность</label>
            </div>
            <div class="col-6">
                <input v-model="specialtie.positionJob" class="form-control" placeholder="Должность">
            </div>
        </div>
        <!-- Конец блока с занимаемой должностью -->
        <!-- Блок специализации -->
        <div class="row mt-2 mb-2">
            <div class="col-6">
                <label>Специализации</label>
            </div>
            <div class="col-6">
                <input v-model="specialtie.specializations" class="form-control" placeholder="Специализация">
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
                    <input type="text" class="form-control" placeholder="Число" v-model="specialtie.salary">
                    <b-form-select v-model="specialtie.currency" :options="currency_options"></b-form-select>
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
                <input type="date" v-model="specialtie.dateEntry" class="form-control" placeholder="Специализация">
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
        name: "Specialtie",
        props:['specialtie', 'currency'],
        data(){
            return{
                currency_options:[
                    { value: 'РУБ', text: 'РУБ' },
                    { value: 'USD', text: 'USD' },
                    { value: 'EUR', text: 'EUR'}
                ]
            }
        }
    }
</script>

<style scoped>
    .specialtie_block{
        border-bottom: 1px solid black;
    }
</style>
