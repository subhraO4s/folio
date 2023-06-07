import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Overview from '../views/Overview.vue'
import TemplateView from '../views/Templates.vue'
import Signup from '../views/auth/Signup.vue'
import Login from '../views/auth/Login.vue'
import VerificationLinkSent from '../views/auth/VerificationLinkSent.vue'
import VerifyingEmail from '../views/auth/VerifyingEmail.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import UserDetails from '../views/Userdetails.vue'
import Blogs from '../views/Blogs.vue'
import Projects from '../views/Projects.vue'
import Support from '../views/Support.vue'
import Settings from '../views/Settings.vue'
import ActivePortfolio from '../views/ActivePortfolio.vue'
import AllPortfolio from '../views/AllPortfolio.vue'
import Template1 from '../templates/template1/view/Page.vue'
import Template2 from '../templates/template2/view/Page.vue'
import AddContent from '../views/AddContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sjb',
      name: 'sjb',
      component: Login
    },
    {
      path: '/verification-link-sent',
      name: 'verification-link-sent',
      component: VerificationLinkSent
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      component: VerifyingEmail
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword
    },
    {
      path: '/user-details',
      name: '/user-details',
      component: UserDetails
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'overview',
          component: Overview
        },
        {
          path: 'templates',
          name: 'templates',
          component: TemplateView
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings
        },
        {
          path: 'cms/projects',
          name: 'projects',
          component: Projects
        },
        {
          path: 'cms/projects/add',
          name: 'projects-add',
          component: AddContent
        },
        {
          path: 'cms/blogs',
          name: 'blogs',
          component: Blogs
        },
        {
          path: 'cms/blogs/add',
          name: 'blogs-add',
          component: AddContent
        },
        {
          path: 'support',
          name: 'support',
          component: Support
        },
        {
          path: 'all-portfolio',
          name: 'all-portfolio',
          component: AllPortfolio
        },
        {
          path: 'active-portfolio',
          name: 'active-portfolio',
          component: ActivePortfolio
        }
      ]
    },
    {
      path: '/portfolio-templates',
      name: 'portfolio-templates',
      children: [
        {
          path: 'template-1',
          name: 'template-1',
          component: Template1
        },
        {
          path: 'template-2',
          name: 'template-2',
          component: Template2
        }
      ]
    }
  ]
})

export default router
