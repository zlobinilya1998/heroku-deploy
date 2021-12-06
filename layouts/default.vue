<template>
  <v-container>
    <v-form ref='form' disabled>
      <v-text-field v-model='name' :rules='rules' label='Имя' style='max-width: 350px' required/>
      <v-btn @click='validate' v-text='`Отправить`'/>
    </v-form>
  </v-container>
</template>

<script>
import {minLength,required} from "@/utils/validationRules"
export default {
  data: () => ({
    name:"",
  }),
  computed:{
    rules(){
      const rules = []
      rules.push(minLength,required)
      return rules
    }
  },
  methods: {
    validate(){
      console.log(this.$refs.form.validate())
      this.$refs.form.validate();
    }
  }
}
</script>
