<template>
    <div class="col-6 bg-white rounded-lg m-2">
        <!-- Начало блока основной информации -->
        <h1>Основная информация</h1>
        <div class="container">
            <!-- Блок с изображением пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6 mt-auto mb-auto">
                    <label>Фотография</label>
                </div>
                <div class="col-6" v-if="resume.imgUrl !== ''">
                    <img class="img-fluid img-thumbnail p-2 w-100 h-auto" style="min-height: 150px;"
                         v-bind:src="resume.imgUrl"
                         v-on:click="$emit('img_click')"
                    />
                </div>
                <div class="col-6" v-else>
                    <img class="img-fluid img-thumbnail p-2 w-100 h-auto" style="min-height: 150px;"
                         src="../assets/user_icon.jpg"
                         v-on:click="$emit('img_click')"
                    />
                </div>
            </div>
            <!-- Конец блока с изображением пользователя -->
            <!-- Блок статуса резюме -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Стасус</label>
                </div>
                <div class="col-6">
                    <b-form-select v-model="resume.status" :options="status_options"></b-form-select>
                </div>
            </div>
            <!-- Конец блока статуса резюме -->
            <!-- Блок с датой рождения пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Дата рождения</label>
                </div>
                <div class="col-6">
                    <input type="date" class="form-control" v-model="resume.birthday">
                </div>
            </div>
            <!-- Конец блока с датой рождения пользователя -->
            <!-- Блок с информацией о поле пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6 mt-auto mb-auto">
                    <label>Пол</label>
                </div>
                <div class="col-6">
                    <b-form-group class="d-flex">
                        <b-form-radio v-model="resume.gender" value="Мужской">Мужской</b-form-radio>
                        <b-form-radio v-model="resume.gender" value="Женский">Женский</b-form-radio>
                    </b-form-group>
                </div>
            </div>
            <!-- Конец блока с информацией о поле пользователя -->
            <!-- Блок с информацией о опыте работы пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6 mt-auto mb-auto">
                    <label>Опыт работы</label>
                </div>
                <div class="col-6">
                    <b-form-group class="d-flex" >
                        <b-form-radio v-model="resume.workExperience" value="Есть">Есть</b-form-radio>
                        <b-form-radio v-model="resume.workExperience" value="Нет" class="mr-2">Нет</b-form-radio>
                    </b-form-group>
                </div>
            </div>
            <!-- Конец блока с информацией о опыте работы пользователя -->
            <!-- Блок с информацией о профессии пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Профессия</label>
                </div>
                <div class="col-6">
                    <input type="text" class="form-control" placeholder="Профессия" v-model="resume.profession">
                </div>
            </div>
            <!-- Конец блока с информацией о профессии пользователя -->
            <!-- Блок с информацией об образовании пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Образование</label>
                </div>
                <div class="col-6">
                    <b-form-select v-model="resume.educationMain" :options="educationMain_options"></b-form-select>
                </div>
            </div>
            <!-- Конец блока с информацией об образовании пользователя -->
            <!-- Блок с информацией о желаемой зарплате пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Желаемая зарплата</label>
                </div>
                <div class="col-6">
                    <div class="d-flex">
                        <input type="text" class="form-control" placeholder="Число" v-model="resume.salary">
                        <b-form-select v-model="resume.currency" :options="currency_options"></b-form-select>
                    </div>
                </div>
            </div>
            <!-- Конец блока с информацией о желаемой зарплате пользователя -->
            <!-- Блок с информацией о ключевых навыках пользователя -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>Ключевые навыки</label>
                </div>
                <div class="col-6">
                    <textarea class="form-control" v-model="resume.ability"></textarea>
                </div>
            </div>
            <!-- Конец блока с информацией о ключевых навыках пользователя -->
            <!-- Блок с информацией о себе -->
            <div class="row mt-2 mb-2">
                <div class="col-6">
                    <label>О себе</label>
                </div>
                <div class="col-6">
                    <textarea class="form-control" v-model="resume.about"></textarea>
                </div>
            </div>
            <!-- Конец блока с информацией о себе -->
            <div class="row mt-2 mb-2 justify-content-center">
                <div class="col-6">
                    <input type="submit" class="btn btn-success pl-5 pr-5" value="Сохранить">
                </div>
            </div>
        </div>
        <!-- Конец блока основной информации -->
    </div>
</template>

<script>
    export default {
        name: "Main_Info",
        props:['resume'],
        data(){
            return{
                status_options: [
                    { value: 'Новый', text: 'Новый' },
                    { value: 'Назначено собеседование', text: 'Назначено собеседование' },
                    { value: 'Принят', text: 'Принят'},
                    { value: 'Отказ', text: 'Отказ'}
                ],
                educationMain_options:[
                    { value: 'Среднее', text: 'Среднее' },
                    { value: 'Среднее специальное', text: 'Среднее специальное' },
                    { value: 'Неоконченное высшее', text: 'Неоконченное высшее'},
                    { value: 'Высшее', text: 'Высшее'},
                    { value: 'Бакалавр', text: 'Бакалавр'},
                    { value: 'Магистр', text: 'Магистр'},
                    { value: 'Кандидат наук', text: 'Кандидат наук'},
                    { value: 'Доктор наук', text: 'Доктор наук'},
                ],
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

</style>
