<template>
  <div id="app">
    <!-- Блок с формой заполнения -->
    <Resume_form
            v-bind:resume="resume"
    />
    <!-- Конец блока с формой заполнения -->
    <!-- Блок заполненого резюме -->
    <Resume
            v-bind:resume="resume"
    />
    <!-- Конец блока заполненого резюме -->
  </div>
</template>

<script>
import Resume_form from "./components/Resume_form";
import Resume from "./components/Resume";
export default {
  name: 'App',
  data() {
    return {
      resume: {
        status: "",
        imgUrl: "",
        firstName: "",
        secondName: "",
        phone: "",
        email:"",
        city:"",
        birthday:"",
        gender:"",
        workExperience:"",
        profession: "",
        educationMain:"",
        salary:"",
        сurrency: "",
        ability: "",
        about:"",
        specialties: [
          {
            positionJob: "",
            salary: "",
            specializations: "",
            dateEntry: ""
          }
        ],
        educations: [
          {
            level: "",
            institution: "",
            faculty: "",
            specialization:"",
            yearEnd: ""
          }
        ]
      }
    }
  },
  components: {
    Resume,
    Resume_form
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
