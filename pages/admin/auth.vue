<template>
  <div class="auth">
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">Login</div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
             v-model="email"
             class="input"
             type="email"
             placeholder="e.g. alexsmith@gmail.com">
          </div>
        </div>

        <form @submit.prevent="onLogin">
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
               v-model="password"
               class="input"
               type="password"
               placeholder="Enter a password">
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import repositoryFactory from "~/repositories/repositoryFactory";

definePageMeta({
  layout: 'not-authorized'
});

const router = useRouter()
const email = ref('');
const password = ref('');

const onLogin = async () => {
  try {
    const response = await repositoryFactory.get('Auth').login({email: email.value, password: password.value});
    localStorage.setItem('userEmail', email.value);
    localStorage.setItem('token', response.token);
    router.push('/admin/all-components')
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
