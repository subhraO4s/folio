import { Client, Account, ID } from 'appwrite'

const client = new Client()

client
  .setEndpoint(import.meta.env.VITE_ENDPOINT) // Your API Endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID) // Your project ID

const account = new Account(client)

export { client, account, ID }
