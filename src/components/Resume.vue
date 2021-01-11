<template>
    <div class="container-fluid">
        <div class="row justify-content-center bg-primary">
            <div class="col-8 bg-white rounded-lg mb-3">
                <div class="container-fluid">
                    <div class="row">
                        <!-- Блок готового резюме -->
                        <div class="col-8">
                            <div class="container">
                                <div class="row mt-5 mb-3">
                                    <!-- Блок с изображением пользователя -->
                                    <div class="col-4" v-if="resume.imgUrl !== ''">
                                        <img class="img-fluid img-thumbnail p-2 w-100 h-auto"
                                             v-bind:src="resume.imgUrl" />
                                    </div>
                                    <div class="col-4" v-else>
                                        <img class="img-fluid img-thumbnail p-2 w-100 h-auto"
                                             src="../assets/user_icon.jpg" />
                                    </div>
                                    <!-- Конец блока с изображением пользователя -->
                                    <!-- Блок основной информации пользователя -->
                                    <div class="col-8">
                                        <div class="container-fluid">
                                            <!-- Блок с именем пользователя -->
                                            <div class="row">
                                                <div class="col">
                                                    <h1 v-if="this.resume.firstName !== '' || this.resume.secondName !== ''">
                                                        {{this.getFullname}}</h1>
                                                    <h1 v-else>Имя Фамилия</h1>
                                                </div>
                                            </div>
                                            <!-- Конец блока с именем пользователя -->
                                            <!-- Блок с городом пользователя -->
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex justify-content-center">
                                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                        <h4 v-if="this.resume.city !== ''">{{this.getCity}}</h4>
                                                        <h4 v-else>Город</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Конец блока с городом пользователя -->
                                            <!-- Блок со статусом резюме -->
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex justify-content-center">
                                                        <h4 v-if="this.resume.status !== ''">{{this.getStatus}}</h4>
                                                        <h4 v-else>Статус резюме</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Конец блока со статусом резюме -->
                                        </div>
                                    </div>
                                    <!-- Конец блока основной информации пользователя -->
                                </div>
                                <div class="row mt-3">
                                    <!-- Блок опыт работы -->
                                    <div class="col-12 pr-5">
                                        <div class="row mt-3">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="d-flex">
                                                            <i class="fa fa-user mr-5 pt-0 fa-elem" aria-hidden="true"></i>
                                                            <h5 class="text-left">Личная информация</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="container-fluid mt-1 mb-1">
                                                        <div class="row">
                                                            <div class="col-1">
                                                                <div class="line h-100 ml-3"></div>
                                                            </div>
                                                            <div class="col-11">
                                                                <div class="row mt-2">
                                                                    <div class="col-4 justify-content-start">
                                                                        <label class="text-left w-100">Образование:</label>
                                                                    </div>
                                                                    <div class="col-8">
                                                                        <p class="text-left w-100">{{this.getEducationMain}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-4">
                                                                        <label class="text-left w-100">Дата рождения:</label>
                                                                    </div>
                                                                    <div class="col-8">
                                                                        <p class="text-left w-100">{{this.getBirthday}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-4">
                                                                        <label class="text-left w-100">Пол:</label>
                                                                    </div>
                                                                    <div class="col-8">
                                                                        <p class="text-left w-100">{{this.getGender}}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-4">
                                                                        <label class="text-left w-100">Профессия:</label>
                                                                    </div>
                                                                    <div class="col-8">
                                                                        <p class="text-left w-100">{{this.getProfession}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 pr-5" v-if="this.resume.workExperience === 'Есть' || this.resume.workExperience === ''">
                                        <div class="row mt-3">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="d-flex">
                                                            <i class="fa fa-briefcase pt-0 pr-3 fa-elem" aria-hidden="true"></i>
                                                            <h5 class="text-left">Опыт работы</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <ResumeSpecialtie
                                                            v-for="specialtie in resume.specialties" :key="specialtie.id"
                                                            v-bind:specialtie="specialtie"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Конец блока опыт работы -->
                                    <!-- Блок образования -->
                                    <div class="col-12 pr-5" v-if="resume.educationMain !== 'Среднее'">
                                        <div class="row mt-3">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="d-flex">
                                                            <i class="fa fa-graduation-cap pt-0 pr-3 fa-elem" aria-hidden="true"></i>
                                                            <h5 class="text-left">Образование</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <ResumeEducation
                                                            v-for="education of resume.educations" :key="education.id"
                                                            v-bind:education="education"

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Конец блока образования -->
                                    <!-- Блок ключевые навыки пользователя -->
                                    <div class="col-12 pr-5">
                                        <div class="row mt-3">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="d-flex">
                                                            <i class="fa fa-hashtag pt-0 pr-3 fa-elem" aria-hidden="true"></i>
                                                            <h5 class="text-left">Ключевые навыки</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="container-fluid mt-1 mb-1">
                                                        <div class="row">
                                                            <div class="col-1">
                                                                <div class="line h-100 ml-3"></div>
                                                            </div>
                                                            <div class="col-11">
                                                                <div class="row mt-2">
                                                                    <div class="col-4 justify-content-start">
                                                                        <label class="text-left w-100">Навыки:</label>
                                                                    </div>
                                                                    <div class="col-8">
                                                                        <p class="text-left w-100">{{this.getAbility}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Конец блока ключевые навыки пользователя -->
                                    <!-- Блок о себе -->
                                    <div class="col-12 pr-5">
                                        <div class="row mt-3">
                                            <div class="container-fluid">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="d-flex">
                                                            <i class="fa fa-comment-o pt-0 pr-3 fa-elem" aria-hidden="true"></i>
                                                            <h5 class="text-left">О себе</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="container-fluid mt-1 mb-1">
                                                        <div class="row">
                                                            <div class="col-1">
                                                                <div class="line h-100 ml-3"></div>
                                                            </div>
                                                            <div class="col-11">
                                                                <div class="row mt-2">
                                                                    <div class="col justify-content-start">
                                                                        <label class="text-left w-100">Информация:</label>
                                                                    </div>
                                                                    <div class="col-8">
                                                                        <p class="text-left w-100">{{this.getAbout}}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Конец блока о себе -->
                                </div>
                            </div>
                        </div>
                        <!-- Блок контактной информации пользователя -->
                        <div class="col-4">
                            <div class="row">
                                <div class="col-12 mt-5">
                                    <div class="row mt-3">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="container-fluid p-0">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="container-fluid d-flex h-100">
                                                                    <div class="line h-100 ml-3"></div>
                                                                    <!-- Блок зарплаты -->
                                                                    <div class="container-fluid p-0 pl-3">
                                                                        <h5 class="text-left">Желаемая зарплата</h5>
                                                                        <div class="row mt-2">
                                                                            <div class="col-4 justify-content-start">
                                                                                <label class="text-left w-100">Запрлата:</label>
                                                                            </div>
                                                                            <div class="col-8 justify-content-start">
                                                                                <p class="text-left w-100">{{this.getSalary}} {{this.getCurrency}}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Конец блока зарплаты -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mt-3">
                                                            <div class="col">
                                                                <div class="container-fluid d-flex h-100">
                                                                    <div class="line h-100 ml-3"></div>
                                                                    <!-- Блок телефона и email -->
                                                                    <div class="container-fluid p-0 pl-3">
                                                                        <h5 class="text-left">Контакты</h5>
                                                                        <div class="row mt-1">
                                                                            <div class="col-4 justify-content-start">
                                                                                <label class="text-left w-100">Телефон:</label>
                                                                            </div>
                                                                            <div class="col-8 justify-content-start">
                                                                                <p class="text-left w-100">{{this.getPhone}}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-4 justify-content-start">
                                                                                <label class="text-left w-100">Email:</label>
                                                                            </div>
                                                                            <div class="col-8 justify-content-start">
                                                                                <label class="text-left w-100">{{this.getEmail}}</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Конец блока телефона и email -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Конец блока контактной информации пользователя -->
                    </div>
                    <!-- Конец блока готового резюме -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ResumeSpecialtie from "./ResumeSpecialtie";
    import ResumeEducation from "./ResumeEducation";
    export default {
        name: "Resume",
        components: {ResumeEducation, ResumeSpecialtie},
        props:['resume'],
        computed :{
            getFullname : function() {
                return this.resume.firstName + ' ' + this.resume.secondName;
            },
            getCity : function () {
                return this.resume.city;
            },
            getPhone : function () {
                return this.resume.phone;
            },
            getEmail : function () {
                return this.resume.email;
            },
            getBirthday : function () {
                return this.resume.birthday;
            },
            getEducationMain : function () {
                return this.resume.educationMain;
            },
            getGender : function () {
                return this.resume.gender;
            },
            getSalary : function () {
                return this.resume.salary;
            },
            getCurrency : function () {
                return this.resume.currency;
            },
            getProfession : function () {
                return this.resume.profession;
            },
            getStatus: function(){
                return this.resume.status;
            },
            getAbility : function () {
                return this.resume.ability;
            },
            getAbout : function () {
                return this.resume.about;
            }
        }
    }
</script>

<style scoped>
    i{
        padding: 4px;
        font-size: 20px;
    }
    .fa-elem{
        font-size: 30px;
    }
    .circle{
        width: 10px;
        height: 10px;
        margin: 7px 10px 0 10px;
        border-radius: 50%;
        border: 1px solid black;
    }
    .line{
        border-left: 1px solid grey;
    }
</style>
