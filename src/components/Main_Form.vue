<template>
    <div class="mt-5 pt-2 content container-fluid">
        <b-alert
                id="alert_response"
                class="fixed-top mt-5"
                :show="dismissCountDown"
                dismissible
                variant="success"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >Резюме изменено</b-alert>

        <div v-if="!not_found" class="row">
            <!-- Блок с формой заполнения -->
            <Resume_form
                    v-bind:resume="resume"
                    v-bind:specialties="specialties"
                    v-bind:educations="educations"
                    v-bind:is_edit="is_edit"
                    style="background-color: #6f758f"
            />
            <!-- Конец блока с формой заполнения -->
            <!-- Блок заполненого резюме -->
            <Resume
                    v-bind:resume="resume"
                    v-bind:specialties="specialties"
                    v-bind:educations="educations"
                    v-on:showAlert="showAlert"
                    style="background-color: #6f758f"
            />
            <!-- Конец блока заполненого резюме -->
        </div>
        <div class="mt-5" v-else>
            <h2 class="mt-5 text-center">Резюме не найдено</h2>
            <a href="#" @click.prevent="back">Вернуться назад</a>
        </div>
    </div>
</template>

<script>
    import Resume_form from "./Resume_form";
    import Resume from "./Resume";
    export default {
        name: "Main_Form",
        components: {
            Resume,
            Resume_form
        },
        data() {
            return {
                resume: {
                    id_resume : "",
                    status_resume: "Новый",
                    imgurl_resume: "",
                    firstname_resume: "",
                    secondname_resume: "",
                    phone_resume: "",
                    email_resume:"",
                    city_resume:"",
                    birthday_resume:"",
                    gender_resume:"",
                    work_experience_resume:"",
                    profession_resume: "",
                    education_level_resume:"",
                    salary_resume:"",
                    currency_resume: "",
                    ability_resume: "",
                    about_resume:""
                },
                specialties: [
                    {
                        id_specialties: "",
                        position_specialties: "",
                        salary_specialties: "",
                        specializations_specialties: "",
                        dateentry_specialties: "",
                        currency_specialties: "",
                        id_resume: "",
                        is_edit: false
                    }
                ],
                educations: [
                    {
                        id_educations: "",
                        level_educations: "",
                        institution_educations: "",
                        faculty_educations: "",
                        specialization_educations:"",
                        yearend_educations: "",
                        id_resume: "",
                        is_edit: false
                    }
                ],
                not_found: false,
                is_edit: false,
                dismissSecs: 5,
                dismissCountDown: 0,
                text_response: ""
            }
        },
        created() {
            if (typeof this.$route.params.id !== "undefined") {

                this.is_edit = true;

                this.axios.get('http://api/cv/' + this.$route.params.id)
                    .then(response => (
                        this.educations = response.data.educations,
                        this.specialties = response.data.specialties,
                        this.resume = response.data.resume
                    )).catch(error => (this.not_found = true, console.log(error)));
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown;
                if (document.getElementById('alert_response') !== null) {
                    document.getElementById('alert_response').textContent = this.text_response;
                }
            },
            showAlert(response) {
                this.dismissCountDown = this.dismissSecs;
                this.text_response = response;
            },
        },
        watch: {
            resume() {
                for(let i = 0; i < this.educations.length; i++) {
                    this.educations[i]["is_edit"] = false;
                }
                for(let i = 0; i < this.specialties.length; i++) {
                    this.specialties[i]["is_edit"] = false;
                }

                localStorage.setItem("resume", JSON.stringify(this.resume));
                localStorage.setItem("educations", JSON.stringify(this.educations));
                localStorage.setItem("specialties", JSON.stringify(this.specialties));
            },
        }
    }
</script>

<style scoped>

</style>
