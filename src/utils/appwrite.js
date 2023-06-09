import { Client, Account, Databases, ID, Query } from 'appwrite'

const client = new Client()

client
  .setEndpoint(import.meta.env.VITE_ENDPOINT) // Your API Endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID) // Your project ID

const account = new Account(client)
const databases = new Databases(client)

export { client, account, databases, ID, Query }
