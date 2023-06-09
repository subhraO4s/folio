import { account, databases, Query, ID } from '@/utils/appwrite'
import { LOGGED_IN_KEY } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookieHelper'
import store from '../store/index'

const DB_ID = import.meta.env.VITE_DATABASE_ID

const middleWare = async (fun) => {
  let response = null
  try {
    const apiResult = await fun()
    response = {
      success: true,
      data: apiResult
    }
  } catch (error) {
    console.log(error.code)
    if (error.code == 401) {
      deleteCookie(LOGGED_IN_KEY)
      window.location.replace('/login')
    }
    response = {
      success: false,
      error
    }
  }
  return response
}
const getDocuments = async (COLLECTION_ID, QUERRY) => {
  let response = await middleWare(() => databases.listDocuments(DB_ID, COLLECTION_ID, QUERRY))
  return response
}

const getSingleDocument = async (COLLECTION_ID, DOCUMENT_ID, QUERRY) => {
  let response = await middleWare(() =>
    databases.getDocument(DB_ID, COLLECTION_ID, DOCUMENT_ID, QUERRY)
  )
  return response
}

const createDocuments = async (COLLECTION_ID, paylaod) => {
  let response = await middleWare(() =>
    databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), paylaod)
  )
  return response
}

const updateDocuments = async (COLLECTION_ID, DOCUMENT_ID, paylaod) => {
  let response = await middleWare(() =>
    databases.updateDocument(DB_ID, COLLECTION_ID, DOCUMENT_ID, paylaod)
  )
  return response
}

const deleteDocuments = async (COLLECTION_ID, DOCUMENT_ID) => {
  let response = await middleWare(() => databases.deleteDocument(DB_ID, COLLECTION_ID, DOCUMENT_ID))
  return response
}

const login = async (email, password) => {
  let response = await middleWare(() => account.createEmailSession(email, password))
  return response
}

const logout = async () => {
  let response = await middleWare(() => account.deleteSessions())
  return response
}

const signup = async (email, password) => {
  console.log({ email, password })
  let response = await middleWare(() => account.create(ID.unique(), email, password))
  return response
}

const sendVerificationEmail = async (redirectinLink) => {
  let response = await middleWare(() => account.createVerification(redirectinLink))
  return response
}

const verifyEmail = async (userId, secret) => {
  let response = await middleWare(() => account.updateVerification(userId, secret))
  return response
}

const sendPasswordRecoveryEmail = async (email, redirectinLink) => {
  let response = await middleWare(() => account.createRecovery(email, redirectinLink))
  return response
}

const changePasswordUsingEmailLink = async (userId, secret, password) => {
  let response = await middleWare(() => account.updateRecovery(userId, secret, password, password))
  return response
}

const changePassword = async (password) => {
  let response = await middleWare(() => account.updatePassword(password))
  return response
}

const getAccount = async () => {
  let response = await middleWare(() => account.get())
  return response
}

const getProjects = async (status) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const UID = store.getters['auth/getUserId']
  const QUERRY = status
    ? [Query.equal('uid', [UID]), Query.equal('status', [status])]
    : [Query.equal('uid', [UID])]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const createProject = async (paylaod) => {
  const UID = store.getters['auth/getUserId']
  const finalPayload = {
    uid: UID,
    ...paylaod
  }
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const response = await createDocuments(COLLECTION_ID, finalPayload)
  return response
}

const editProject = async (documentId, paylaod) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const response = await updateDocuments(COLLECTION_ID, documentId, paylaod)
  return response
}

const deleteProject = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const response = await deleteDocuments(COLLECTION_ID, documentId)
  return response
}

const getBlogs = async (status) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [Query.equal('uid', [UID]), Query.equal('status', [status])]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const createBlog = async (paylaod) => {
  const UID = store.getters['auth/getUserId']
  const finalPayload = {
    uid: UID,
    ...paylaod
  }
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const response = await createDocuments(COLLECTION_ID, finalPayload)
  return response
}

const editBlog = async (documentId, paylaod) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const response = await updateDocuments(COLLECTION_ID, documentId, paylaod)
  return response
}

const deleteBlog = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const response = await deleteDocuments(COLLECTION_ID, documentId)
  return response
}

const getAllPortfolios = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [Query.equal('uid', [UID])]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getActivePortfolio = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [Query.equal('uid', [UID]), Query.equal('active', [true])]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getUserIdFromUserName = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const response = await getSingleDocument(COLLECTION_ID, documentId)
  return response
}

const getUserNameFromUserId = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [Query.equal('uid', [UID])]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getProtfolioDocument = async (documentId) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const response = await getSingleDocument(COLLECTION_ID, documentId)
  return response
}

export {
  getAccount,
  login,
  logout,
  signup,
  sendVerificationEmail,
  verifyEmail,
  sendPasswordRecoveryEmail,
  changePasswordUsingEmailLink,
  changePassword,
  getProjects,
  createProject,
  editProject,
  deleteProject,
  getBlogs,
  createBlog,
  deleteBlog,
  editBlog,
  getAllPortfolios,
  getActivePortfolio,
  getUserIdFromUserName,
  getProtfolioDocument,
  getUserNameFromUserId
}
