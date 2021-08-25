<template>
  <form @submit.prevent="submit">
    <FormInput :error="usernameStatus.message" name="Username" type="text" v-model="username"/>
    <FormInput :error="passwordStatus.message" name="Password" type="password" v-model="password"/>
    <button
        class="h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        :disabled="!usernameStatus.valid || !passwordStatus.valid"
    >Sing Up
    </button>
  </form>
</template>
<script lang="ts">
import {require, length, validate, Status} from '@/validators'
import {computed, defineComponent, ref} from "vue";
import FormInput from "@/components/FormInput.vue";
import {User} from "@/type";
import {useModal} from "@/components/useModal";
import {useStore} from "@/store";

export default defineComponent({
  name: 'SingUp',
  components: {FormInput},
  setup() {
    const store = useStore()
    const modal = useModal()
    const username = ref('')
    const usernameStatus = computed<Status>(() => {
      return validate(username.value, [require(), length({min: 4, max: 10})])
    })
    const password = ref('')
    const passwordStatus = computed<Status>(() => {
      return validate(password.value, [require(), length({min: 4, max: 40})])
    });

    // eslint-disable-next-line no-unused-vars
    const submit = async (e: any) => {
      if (!usernameStatus.value.valid || !passwordStatus.value.valid) {
        return
      }
      const user: User = {
        id: -1,
        username: username.value,
        password: password.value
      }
      await store.createUser(user)
      modal.hideModal()
    }
    return {
      submit,
      usernameStatus,
      username,
      passwordStatus,
      password
    }
  }
})
</script>