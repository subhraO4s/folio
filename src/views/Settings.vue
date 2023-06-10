<template>
  <section class="p-4 md:ml-64 h-auto pt-20">
    <div
      class="flex flex-col items-center justify-center gap-8"
      style="height: calc(100vh - 200px)"
    >
      <h1
        class="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Settings
      </h1>
      <div class="pb-8">
        <img
          class="rounded-full w-40 h-40 border"
          src="https://flowbite.com/docs/images/examples/image-4@2x.jpg"
          alt="image description"
        />
      </div>
      <form @submit.prevent>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="user_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >UserName</label
            >
            <input
              type="text"
              name="user_name"
              id="user_name"
              v-model="userName"
              :disabled="!editMode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Name</label
            >
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              :disabled="!editMode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            :disabled="!editMode"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div class="flex justify-center items-center" v-if="!editMode">
          <button
            @click="toggleEditMode"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Details
          </button>
        </div>
        <div class="flex justify-between items-center" v-else>
          <button
            @click="toggleEditMode"
            class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Cancel
          </button>
          <button
            @click="submitChange"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { updateUserSettings, checkUserNameExsists } from '../api/apis'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      editMode: false,
      userName: this.uName,
      name: '',
      email: '',
      chageLog: new Map()
    }
  },
  computed: {
    ...mapGetters({
      storeUserName: 'auth/getUserName',
      storeEmail: 'auth/getEmail',
      storeName: 'auth/getName'
    })
  },
  methods: {
    generatePayload() {
      return {
        userName: this.chageLog.get('userName') == this.userName ? undefined : this.userName,
        name: this.chageLog.get('name') == this.name ? undefined : this.name,
        email: this.chageLog.get('email') == this.email ? undefined : this.email,
        password: this.chageLog.get('email') == this.email ? undefined : this.password
      }
    },
    toggleEditMode() {
      this.editMode = !this.editMode
    },
    setChangeLog() {
      this.chageLog.set('userName', this.userName)
      this.chageLog.set('name', this.name)
      this.chageLog.set('email', this.email)
    },
    initialize() {
      this.userName = this.storeUserName
      this.name = this.storeName
      this.email = this.storeEmail
      this.setChangeLog()
    },
    submitChange() {
      console.log(this.generatePayload())
    }
  },
  mounted() {
    this.initialize()
  }
}
</script>
