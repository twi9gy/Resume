<template>
    <div class="container-fluid">
        <!-- Блок ошибок -->
        <div class="row justify-content-center mb-3" v-if="errors.length">
            <div class="col-6 bg-white rounded-lg mt-2">
                <h3 class="mt-2">Пожалуйста исправьте указанные ошибки:</h3>
                <b-list-group class="mb-2">
                    <b-list-group-item v-for="error in errors" :key="error">{{error}}</b-list-group-item>
                </b-list-group>
            </div>
        </div>
        <!-- Конец блока ошибок -->
        <div class="row justify-content-center">
            <div class="col-8 bg-white rounded-lg mb-3">
                <div class="container-fluid">
                    <div class="row">
                        <!-- Блок готового резюме -->
                        <div class="col-8">
                            <div class="container">
                                <div class="row mt-5 mb-3">
                                    <!-- Блок с изображением пользователя -->
                                    <div class="col-4" v-if="resume.imgurl_resume !== ''">
                                        <img class="img-fluid img-thumbnail p-2 w-100 h-auto"
                                             :src=getImgUrl() />
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
                                                    <h1 v-if="this.resume.firstname_resume !== '' || this.resume.secondname_resume !== ''">
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
                                                        <h4 v-if="this.resume.city_resume !== ''">{{this.getCity}}</h4>
                                                        <h4 v-else>Город</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Конец блока с городом пользователя -->
                                            <!-- Блок со статусом резюме -->
                                            <div class="row">
                                                <div class="col">
                                                    <div class="d-flex justify-content-center">
                                                        <h4 v-if="this.resume.status_resume !== ''">{{this.getStatus}}</h4>
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
                                                            <i class="fa fa-user mr-3 pt-0 fa-elem" aria-hidden="true"></i>
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
                                    <div class="col-12 pr-5" v-if="this.resume.work_experience_resume === 'Есть' || this.resume.work_experience_resume === ''">
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
                                                            v-for="specialtie in specialties" :key="specialtie.id"
                                                            v-bind:specialtie="specialtie"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Конец блока опыт работы -->
                                    <!-- Блок образования -->
                                    <div class="col-12 pr-5" v-if="resume.education_level_resume !== 'Среднее'">
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
                                                            v-for="education of educations" :key="education.id"
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
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <input type="submit" class="btn btn-success pr-5 pl-5 ml-5 mt-3"
                                                                       v-on:click="checkForm_info" value="Сохранить">
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
        data(){
          return{
              errors:[]
          }
        },
        props:['resume', 'specialties', 'educations'],
        computed :{
            getFullname : function() {
                return this.resume.firstname_resume + ' ' + this.resume.secondname_resume;
            },
            getCity : function () {
                return this.resume.city_resume;
            },
            getPhone : function () {
                return this.resume.phone_resume;
            },
            getEmail : function () {
                return this.resume.email_resume;
            },
            getBirthday : function () {
                return this.resume.birthday_resume;
            },
            getEducationMain : function () {
                return this.resume.education_level_resume;
            },
            getGender : function () {
                return this.resume.gender_resume;
            },
            getSalary : function () {
                return this.resume.salary_resume;
            },
            getCurrency : function () {
                return this.resume.currency_resume;
            },
            getProfession : function () {
                return this.resume.profession_resume;
            },
            getStatus: function(){
                return this.resume.status_resume;
            },
            getAbility : function () {
                return this.resume.ability_resume;
            },
            getAbout : function () {
                return this.resume.about_resume;
            }
        },
        methods: {
            // Валидация формы
            checkForm_info: function (e) {
                e.preventDefault();

                this.errors = [];

                if (!this.resume.firstname_resume) {
                    this.errors.push('Требуется указать имя.');
                }
                if (!this.resume.secondname_resume) {
                    this.errors.push('Требуется указать фамилию.');
                }
                if (!this.resume.phone_resume) {
                    this.errors.push('Требуется указать номер.');
                } else if (!this.validPhone(this.resume.phone_resume)) {
                    this.errors.push('Укажите корректный телефон. Он должен состоять' +
                        'из цифр и имеет длину от 6 до 10 символов.');
                }


                if (!this.resume.email_resume) {
                    this.errors.push('Требуется указать Email.');
                } else if (!this.validEmail(this.resume.email_resume)) {
                    this.errors.push('Укажите корректный адрес электронной почты.');
                }
                if (!this.resume.city_resume) {
                    this.errors.push('Требуется указать город проживания.');
                }

                if (!this.validSalary(this.resume.salary_resume)) {
                    this.errors.push('Требуется указать корректную заработную плату.');
                }

                if (this.$route.fullPath === '/add') {
                    if (this.errors.length === 0) {
                        this.axios({
                            method: 'POST',
                            url: 'http://api/cv/add',
                            data: {
                                resume: this.resume,
                                specialties: this.specialties,
                                educations: this.educations
                            },
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        }).then(response => (this.$emit('showAlert', response.data.message)))
                            .catch(error => (this.$emit('showAlert', error.data.message)));
                    }
                } else {
                    if (this.errors.length === 0) {
                        // Получаем данные из локального хранилища
                        let resume_store = JSON.parse(localStorage.getItem("resume"));
                        let educations_store = JSON.parse(localStorage.getItem("educations"));
                        let specialties_store = JSON.parse(localStorage.getItem("specialties"));
                        // Создаем результирующий массив для запроса на сервер
                        let params = {
                            resume: {},
                            educations: [],
                            specialties: []
                        };
                        // Проверяем изменились ли данные в резюме
                        if (this.resume.work_experience_resume !== resume_store.work_experience_resume) {
                            params["resume"]["work_experience_resume"] = this.resume.work_experience_resume;
                        }
                        if (this.resume.status_resume !== resume_store.status_resume) {
                            params["resume"]["status_resume"] = this.resume.status_resume;
                        }
                        if (this.resume.secondname_resume !== resume_store.secondname_resume) {
                            params["resume"]["secondname_resume"] = this.resume.secondname_resume;
                        }
                        if (this.resume.salary_resume !== resume_store.salary_resume) {
                            params["resume"]["salary_resume"] = this.resume.salary_resume;
                        }
                        if (this.resume.profession_resume !== resume_store.profession_resume) {
                            params["resume"]["profession_resume"] = this.resume.profession_resume;
                        }
                        if (this.resume.phone_resume !== resume_store.phone_resume) {
                            params["resume"]["phone_resume"] = this.resume.phone_resume;
                        }
                        if (this.resume.imgurl_resume !== resume_store.imgurl_resume) {
                            params["resume"]["imgurl_resume"] = this.resume.imgurl_resume;
                        }
                        if (this.resume.gender_resume !== resume_store.gender_resume) {
                            params["resume"]["gender_resume"] = this.resume.gender_resume;
                        }
                        if (this.resume.firstname_resume !== resume_store.firstname_resume) {
                            params["resume"]["firstname_resume"] = this.resume.firstname_resume;
                        }
                        if (this.resume.email_resume !== resume_store.email_resume) {
                            params["resume"]["email_resume"] = this.resume.email_resume;
                        }
                        if (this.resume.education_level_resume !== resume_store.education_level_resume) {
                            params["resume"]["education_level_resume"] = this.resume.education_level_resume;
                        }
                        if (this.resume.currency_resume !== resume_store.currency_resume) {
                            params["resume"]["currency_resume"] = this.resume.currency_resume;
                        }
                        if (this.resume.city_resume !== resume_store.city_resume) {
                            params["resume"]["city_resume"] = this.resume.city_resume;
                        }
                        if (this.resume.birthday_resume !== resume_store.birthday_resume) {
                            params["resume"]["birthday_resume"] = this.resume.birthday_resume;
                        }
                        if (this.resume.about_resume !== resume_store.about_resume) {
                            params["resume"]["about_resume"] = this.resume.about_resume;
                        }
                        if (this.resume.ability_resume !== resume_store.ability_resume) {
                            params["resume"]["ability_resume"] = this.resume.ability_resume;
                        }
                        // Проверяем добавление новых образований
                        if (educations_store.length !== this.educations.length) {
                            // Поиск новых образований
                            let edu = this.Condition_education(this.educations);
                            // Запрос на добавление новых образований
                            if (edu.length > 0) {
                                this.axios({
                                    method: 'POST',
                                    url: 'http://api/education/add',
                                    data: {
                                        educations: edu,
                                        id_resume: this.resume.id_resume
                                    },
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                }).then(response => (this.$emit('showAlert', response.data.message)))
                                    .catch(error => (this.$emit('showAlert', error.data.message)));
                            }
                        }

                        // Проверяем добавление новых мест работы
                        if (specialties_store.length !== this.specialties.length) {
                            // Поиск новых образований
                            let spec = this.Condition_specialties(this.specialties);
                            // Запрос на добавление новых образований
                            if (spec.length > 0) {
                                this.axios({
                                    method: 'POST',
                                    url: 'http://api/specialty/add',
                                    data: {
                                        specialties: spec,
                                        id_resume: this.resume.id_resume
                                    },
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                }).then(response => (this.$emit('showAlert', response.data.message)))
                                    .catch(error => (this.$emit('showAlert', error.data.message)));
                            }
                        }

                        // Проверяем есть ли изменения в образованиях
                        for (let i = 0; i < this.educations.length; i++) {
                            if (this.educations[i].id_educations !== "") {
                                if(this.educations[i].is_edit === true) {
                                    let education = educations_store.find(edication => edication.id_educations === this.educations[i].id_educations);
                                    params.educations[i] = {};
                                    if (this.educations[i].faculty_educations !== education.faculty_educations) {
                                        params.educations[i]["faculty_educations"] = this.educations[i].faculty_educations;
                                    }
                                    if (this.educations[i].institution_educations !== education.institution_educations) {
                                        params.educations[i]["institution_educations"] = this.educations[i].institution_educations;
                                    }
                                    if (this.educations[i].level_educations !== education.level_educations) {
                                        params.educations[i]["level_educations"] = this.educations[i].level_educations;
                                    }
                                    if (this.educations[i].specialization_educations !== education.specialization_educations) {
                                        params.educations[i]["specialization_educations"] = this.educations[i].specialization_educations;
                                    }
                                    if (this.educations[i].yearend_educations !== education.yearend_educations) {
                                        params.educations[i]["yearend_educations"] = this.educations[i].yearend_educations;
                                    }

                                    this.axios({
                                        method: 'POST',
                                        url: 'http://api/education/'+ education.id_educations +'/edit',
                                        data: {
                                            education: params.educations[i]
                                        },
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    }).then(response => (this.$emit('showAlert', response.data.message)))
                                        .catch(error => (this.$emit('showAlert', error.data.message)));
                                }
                            }
                        }

                        // Проверяем есть ли изменения в местах работы
                        for (let i = 0; i < this.specialties.length; i++) {
                            if (this.specialties[i].id_specialties !== "") {
                                if(this.specialties[i].is_edit === true) {
                                    let specialty = specialties_store.find(specialty => specialty.id_specialties === this.specialties[i].id_specialties);
                                    params.specialties[i] = {};
                                    if (this.specialties[i].currency_specialties !== specialty.currency_specialties) {
                                        params.specialties[i]["currency_specialties"] = this.specialties[i].currency_specialties;
                                    }
                                    if (this.specialties[i].dateentry_specialties !== specialty.dateentry_specialties) {
                                        params.specialties[i]["dateentry_specialties"] = this.specialties[i].dateentry_specialties;
                                    }
                                    if (this.specialties[i].position_specialties !== specialty.position_specialties) {
                                        params.specialties[i]["position_specialties"] = this.specialties[i].position_specialties;
                                    }
                                    if (this.specialties[i].salary_specialties !== specialty.salary_specialties) {
                                        params.specialties[i]["salary_specialties"] = this.specialties[i].salary_specialties;
                                    }
                                    if (this.specialties[i].specializations_specialties !== specialty.specializations_specialties) {
                                        params.specialties[i]["specializations_specialties"] = this.specialties[i].specializations_specialties;
                                    }

                                    this.axios({
                                        method: 'POST',
                                        url: 'http://api/specialty/'+ specialty.id_specialties +'/edit',
                                        data: {
                                            specialty: params.specialties[i]
                                        },
                                        headers: {
                                            "Content-type": "application/json; charset=UTF-8"
                                        }
                                    }).then(response => (this.$emit('showAlert', response.data.message)))
                                        .catch(error => (this.$emit('showAlert', error.data.message)));
                                }
                            }
                        }

                        // Запрос на изменение резюме
                        this.axios({
                            method: 'POST',
                            url: 'http://api/cv/' + this.resume.id_resume + '/edit',
                            data: {
                                resume: params.resume
                            },
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            }
                        }).then(response => (
                            this.$emit('showAlert', response.data.message)
                        )).catch(error => (
                            this.$emit('showAlert', error.data.message)
                        ));
                    }
                }
            },

            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },

            Condition_education: function (educations) {
                function condition(value) {
                    var result = false;
                    if (value.id_educations === "") {
                        result = true;
                    }
                    return result;
                }
                return  educations.filter(condition);
            },

            Condition_specialties: function (specialties) {
                function condition(value) {
                    var result = false;
                    if (value.id_specialties === "") {
                        result = true;
                    }
                    return result;
                }
                return  specialties.filter(condition);
            },

            // Функция для валидации номера телефона
            validPhone: function (phone) {
                var re = /^[0-9]{6,9}$/;
                return re.test(phone);
            },
            // Функция для валидации зарплаты
            validSalary: function (salary) {
                var re = /^[0-9]{1,}$/;
                return re.test(salary);
            },
            getImgUrl: function() {
                return require('../assets/' + this.resume.imgurl_resume);
            },
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
