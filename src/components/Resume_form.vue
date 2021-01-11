<template>
    <div class="container-fluid">
        <div class="row justify-content-center bg-primary">
            <div class="col-12">
                <!-- Форма для основной информации -->
                <form id="info" v-on:submit="checkForm_info" method="post">
                    <!-- Блок ошибок -->
                    <div class="row justify-content-center mt-2" v-if="errors.length">
                        <div class="col-6 bg-white rounded-lg mt-2 mb-2">
                            <h3 class="mt-2">Пожалуйста исправьте указанные ошибки:</h3>
                            <b-list-group class="mb-2">
                                <b-list-group-item v-for="error in errors" :key="error">{{error}}</b-list-group-item>
                            </b-list-group>
                        </div>
                    </div>
                    <!-- Конец блока ошибок -->
                    <!-- Блок с контактной информацией -->
                    <div class="row justify-content-center">
                        <Contacts_info
                                v-bind:resume="resume"
                                v-bind:errors="errors"
                        />
                    </div>
                    <!-- Конец блока с контактной информацией -->
                    <!-- Блок основной информации -->
                    <div class="row justify-content-center">
                        <Main_Info class="main_info"
                                   v-bind:resume="resume"
                                   v-on:img_click="img_click"
                        />
                    </div>
                    <!-- Конец блока основной информации -->
                </form>
                <!-- Конец формы для основной информации -->
            </div>
            <!-- Блок с изображением пользователя -->
            <input id="img_file" type="file" class="d-none" v-on:change="selectImg">
            <!-- Конец блока с изображением пользователя -->
            <!-- Блок специальностей -->
            <div class="col-6 bg-white rounded-lg m-2" v-if="resume.workExperience === 'Есть'">
                <h1 class="specialties_title">Специальность</h1>
                <Specialtie
                        v-for="specialtie in resume.specialties" :key="specialtie.id"
                        v-bind:specialtie="specialtie"
                        v-on:change="changeCurrency"
                        v-on:deleteSpecialtie="deleteSpecialtie"
                />
                <div class="row mt-2 mb-2">
                    <div class="col">
                        <button class="btn btn-primary" v-on:click="add_specialtie">Добавить специальность</button>
                    </div>
                </div>
            </div>
            <!-- Конец блока специальностей -->
            <!-- Блок образования -->
            <div class="col-6 bg-white rounded-lg m-2" v-if="resume.educationMain !== 'Среднее'">
                <h1 class="specialties_title">Образование</h1>
                <Education
                        v-for="education in resume.educations" :key="education.id"
                        v-bind:education="education"
                        v-bind:selected_city="resume.city"
                        v-on:deleteEducation="deleteEducation"
                />
                <div class="row mt-2 mb-2">
                    <div class="col">
                        <button class="btn btn-primary" v-on:click="add_education">Добавить образование</button>
                    </div>
                </div>
            </div>
            <!-- Конец блока образования -->
        </div>
    </div>
</template>

<script>
    import Contacts_info from "./Contacts_info";
    import Main_Info from "./Main_Info";
    import Specialtie from "./Specialtie";
    import Education from "./Education";
    export default {
        name: "Resume_form",
        components: {Education, Specialtie, Main_Info, Contacts_info},
        data() {
            return{
                errors:[]
            }
        },
        props:['resume'],
        methods:{
            // Вызов диалогового окна, для выбора изображения
            img_click(){
                let img_file = document.getElementById('img_file');
                img_file.click();
            },

            // Функция для обработки события "Выбор изображения"
            selectImg(){
                let img_file = document.getElementById('img_file');
                let files = img_file.files;
                this.resume.imgUrl = files[0].name;
            },

            // Функция для обработки события "Добавление специальности"
            add_specialtie(){
                let newSpecialtie = {
                    positionJob: "",
                    salary: "",
                    specializations: ""
                };
                this.resume.specialties.push(newSpecialtie);
            },

            // Функция для обработки события "Добавление образования"
            add_education(){
                let newEducation = {
                    level: "",
                    institution: "",
                    faculty: "",
                    specialization:"",
                    yearEnd: ""
                };
                this.resume.educations.push(newEducation);
            },

            // Функция для обработки события "Удаление специальности"
            deleteSpecialtie(specialtie){
                this.resume.specialties.splice(this.resume.specialties.indexOf(specialtie), 1);
            },

            // Функция для обработки события "Удаление образования"
            deleteEducation(education){
                this.resume.educations.splice(this.resume.educations.indexOf(education), 1);
            },

            // Валидация формы
            checkForm_info: function (e) {
                this.errors = [];

                if (!this.resume.firstName) {
                    this.errors.push('Требуется указать имя.');
                }
                if (!this.resume.secondName) {
                    this.errors.push('Требуется указать фамилию.');
                }
                if (!this.resume.phone) {
                    this.errors.push('Требуется указать номер.');
                } else if (!this.validPhone(this.resume.phone)) {
                    this.errors.push('Укажите корректный телефон. Он должен состоять' +
                        'из цифр и имеет длину от 6 до 10 символов.');
                }

                if (!this.resume.email) {
                    this.errors.push('Требуется указать Email.');
                }
                if (!this.resume.city) {
                    this.errors.push('Требуется указать город проживания.');
                }

                e.preventDefault();
            },

            // Функция для валидации номера телефона
            validPhone: function (phone) {
                var re = /^[0-9]{6,9}$/;
                return re.test(phone);
            }
        }
    }
</script>

<style scoped>
    .specialties_title{
        border-bottom: 1px solid black;
    }
</style>
