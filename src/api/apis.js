import { account, storage, databases, Query, ID } from '@/utils/appwrite'
import { LOGGED_IN_KEY } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookieHelper'
import store from '../store/index'

const DB_ID = import.meta.env.VITE_DATABASE_ID
const BUCKET_ID = import.meta.env.VITE_IMAGE_BUCKET_ID

const middleWare = async (fun) => {
  let response = null
  try {
    const apiResult = await fun()
    response = {
      success: true,
      data: apiResult
    }
  } catch (error) {
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

const changePassword = async (password, oldpassword) => {
  let response = await middleWare(() => account.updatePassword(password, oldpassword))
  return response
}

const changeEmail = async (email, password) => {
  let response = await middleWare(() => account.updateEmail(email, password))
  return response
}

const changeName = async (name) => {
  let response = await middleWare(() => account.updateName(name))
  return response
}

const changeUserName = async (newUserName) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const DOCUMENT_ID = store.getters['auth/getUserName']
  let response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  if (response.success) {
    response = response.data
    const UID = store.getters['auth/getUserId']
    const paylaod = { uid: UID, count: response.count }
    response = await deleteDocuments(COLLECTION_ID, DOCUMENT_ID)
    if (response.success) {
      response = await middleWare(() =>
        databases.createDocument(DB_ID, COLLECTION_ID, newUserName, paylaod)
      )
    }
  }
  return response
}

const getAccount = async () => {
  let response = await middleWare(() => account.get())
  return response
}

const getFileUrlPostUpload = async (file) => {
  let response = await uploadFile(file)
  if (response.success) {
    const fileId = response.data.$id
    response = await getFileUrlBaseOnFileId(fileId)
  }
  return response
}

const getFileUrlBaseOnFileId = async (fileId) => {
  let response = await middleWare(() => storage.getFilePreview(BUCKET_ID, fileId))
  return response
}

const uploadFile = async (file) => {
  let response = await middleWare(() => storage.createFile(BUCKET_ID, ID.unique(), file))
  return response
}

const getProjects = async (status) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const UID = store.getters['auth/getUserId']
  const QUERRY = status
    ? [Query.equal('uid', [UID]), Query.equal('status', [status]), Query.orderDesc('published_on')]
    : [Query.equal('uid', [UID]), Query.orderDesc('published_on')]
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

const getBlogs = async (status, limit) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const UID = store.getters['auth/getUserId']
  const QUERRY = status
    ? [Query.equal('uid', [UID]), Query.equal('status', [status]), Query.orderDesc('published_on')]
    : [Query.equal('uid', [UID]), Query.orderDesc('published_on'), Query.limit(limit)]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getBlog = async (DOCUMENT_ID) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_BLOGS
  const response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  return response
}

const getProject = async (DOCUMENT_ID) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PROJECTS
  const response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
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
  const QUERRY = [Query.equal('uid', [UID]), Query.orderDesc('$createdAt')]
  const response = await getDocuments(COLLECTION_ID, QUERRY)
  return response
}

const getActivePortfolio = async () => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const UID = store.getters['auth/getUserId']
  const QUERRY = [
    Query.equal('uid', [UID]),
    Query.equal('active', [true]),
    Query.orderDesc('$createdAt')
  ]
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

const addTemplateToProfile = async (payload) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
  const DOCUMENT_ID = store.getters['auth/getUserName']
  let response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
  if (response.success) {
    if (response.data.count >= 10) {
      return {
        error: 'Limit Exceeded',
        success: false
      }
    }
    let existingCount = response.data.count
    existingCount++
    const pl = {
      count: existingCount
    }
    response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, pl)
    if (response.success) {
      const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
      const UID = store.getters['auth/getUserId']
      const finalPayload = {
        uid: UID,
        ...payload
      }
      response = await createDocuments(COLLECTION_ID, finalPayload)
    }
  }
  return response
}

const deletePortfolio = async (documentId) => {
  console.log(documentId)
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  let response = await deleteDocuments(COLLECTION_ID, documentId)
  if (response.success) {
    const COLLECTION_ID = import.meta.env.VITE_COLLECTION_USER_DETAILS
    const DOCUMENT_ID = store.getters['auth/getUserName']
    response = await getSingleDocument(COLLECTION_ID, DOCUMENT_ID)
    if (response.success) {
      let existingCount = response.data.count
      existingCount--
      const pl = {
        count: existingCount
      }
      response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, pl)
    }
  }
  return response
}

const toggleSiteActiveStatus = async (documentId, isActive) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  const pl = {
    active: !isActive
  }
  let response = await updateDocuments(COLLECTION_ID, documentId, pl)
  if (response.success && !isActive) {
    response = await getActivePortfolio()
    if (response.success) {
      const data = response.data.documents
      const pl2 = {
        active: false
      }
      for (let i = 0; i < data.length; i++) {
        if (data.$id != documentId) {
          await updateDocuments(COLLECTION_ID, data.$id, pl2)
        }
      }
    }
  }
  return response
}

const updatePortfolio = async (DOCUMENT_ID, payload) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  let response = await updateDocuments(COLLECTION_ID, DOCUMENT_ID, payload)
  return response
}

const overrideTemplateData = async (payload) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  let response = await createDocuments(COLLECTION_ID, payload)
  return response
}

const updateUserSettings = async (paylaod) => {
  let response
  if (paylaod.name) {
    response = await changeName(paylaod.name)
    if (!response.success) return response
  }

  if (paylaod.email) {
    response = await changeName(paylaod.email, paylaod.password)
    if (!response.success) return response
  }

  if (paylaod.userName) {
    response = await changeUserName(paylaod.userName)
    if (!response.success) return response
  }

  return response
}

const checkUserNameExsists = async (userName) => {
  const COLLECTION_ID = import.meta.env.VITE_COLLECTION_PORTFOLIOS
  let response = await getSingleDocument(COLLECTION_ID, userName)
  if (response.success) {
    response.success = false // counter logic
  }
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
  getUserNameFromUserId,
  getFileUrlBaseOnFileId,
  uploadFile,
  getFileUrlPostUpload,
  addTemplateToProfile,
  overrideTemplateData,
  deletePortfolio,
  toggleSiteActiveStatus,
  getProject,
  getBlog,
  updatePortfolio,
  updateUserSettings,
  checkUserNameExsists
}
