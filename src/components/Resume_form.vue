<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12">
                <!-- Блок с контактной информацией -->
                <div class="row justify-content-center">
                    <Contacts_info
                            v-bind:resume="resume"
                    />
                </div>
                <!-- Конец блока с контактной информацией -->
                <!-- Блок основной информации -->
                <div class="row justify-content-center">
                    <Main_Info class="main_info"
                               v-bind:resume="resume"
                               v-bind:is_edit="is_edit"
                               v-on:img_click="img_click"
                    />
                </div>
                <!-- Конец блока основной информации -->
            </div>
            <!-- Блок с изображением пользователя -->
            <input id="img_file" type="file" ref="file" class="d-none" v-on:change="selectImg">
            <!-- Конец блока с изображением пользователя -->
            <!-- Блок специальностей -->
            <div class="col-6 bg-white rounded-lg m-2" v-if="resume.work_experience_resume === 'Есть'">
                <h1 class="specialties_title">Специальность</h1>
                <Specialty
                        v-for="specialty in specialties" :key="specialty.id"
                        v-bind:specialty="specialty"
                        v-on:deleteSpecialtie="deleteSpecialty"
                />
                <div class="row mt-2 mb-2">
                    <div class="col">
                        <button class="btn btn-primary" v-on:click="add_specialty">Добавить специальность</button>
                    </div>
                </div>
            </div>
            <!-- Конец блока специальностей -->
            <!-- Блок образования -->
            <div class="col-6 bg-white rounded-lg m-2" v-if="resume.education_level_resume !== 'Среднее'">
                <h1 class="specialties_title">Образование</h1>
                <Education
                        v-for="education in educations" :key="education.id"
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
    import Specialty from "./Specialty";
    import Education from "./Education";
    export default {
        name: "Resume_form",
        components: {Education, Specialty, Main_Info, Contacts_info},
        props:['resume', 'specialties', 'educations', 'is_edit'],
        methods:{
            // Вызов диалогового окна, для выбора изображения
            img_click(){
                let img_file = document.getElementById('img_file');
                img_file.click();
            },

            // Функция для обработки события "Выбор изображения"
            selectImg(){
                this.resume.imgurl_resume = this.$refs.file.files[0];

                let formData = new FormData();
                formData.append('file', this.$refs.file.files[0]);

                this.axios({
                    method: 'POST',
                    url: 'http://api/upload',
                    data: formData,
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(response => (this.resume.imgurl_resume = response.data.filename))
                    .catch(error => (console.log(error)));
            },

            // Функция для обработки события "Добавление специальности"
            add_specialty(){
                let newSpecialty = {
                    id_specialties: "",
                    position_specialties: "",
                    salary_specialties: "",
                    specializations_specialties: "",
                    dateentry_specialties: "",
                    currency_specialties: "",
                    id_resume: "",
                    is_edit: false
                };
                this.specialties.push(newSpecialty);
            },

            // Функция для обработки события "Добавление образования"
            add_education() {
                let newEducation = {
                    id_educations: "",
                    level_educations: "",
                    institution_educations: "",
                    faculty_educations: "",
                    specialization_educations:"",
                    yearend_educations: "",
                    id_resume: this.resume.id_resume,
                    is_edit: false
                };
                console.log(this.educations);
                this.educations.push(newEducation);
            },

            // Функция для обработки события "Удаление специальности"
            deleteSpecialty(specialty){
                this.axios({
                    method: 'DELETE',
                    url: 'http://api/specialty/' + specialty.id_specialties + '/delete'
                }).then(response => (console.log(response.data.message)))
                    .catch(error => (console.log(error.data.message)));

                this.specialties.splice(this.specialties.indexOf(specialty), 1);
            },

            // Функция для обработки события "Удаление образования"
            deleteEducation(education){
                this.axios({
                    method: 'DELETE',
                    url: 'http://api/education/' + education.id_educations + '/delete'
                }).then(response => (console.log(response.data.message)))
                    .catch(error => (console.log(error.data.message)));

                this.educations.splice(this.educations.indexOf(education), 1);
            }
        }
    }
</script>

<style scoped>
    .specialties_title{
        border-bottom: 1px solid black;
    }
</style>
