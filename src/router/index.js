import { createRouter, createWebHistory } from 'vue-router'
import { getCookie } from '@/utils/cookieHelper'
import { LOGGED_IN_KEY } from '@/utils/constants'
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
import AddContent from '../views/addContent/AddContent.vue'
import PortfolioView from '../views/PortfolioView.vue'
import HistoryPortfolioView from '../views/HistoryPortfolioView.vue'

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
      path: '/portfolio/:id',
      name: 'portfolio-view',
      component: PortfolioView
    },
    {
      path: '/history/:id/:doc',
      name: 'history-view',
      component: HistoryPortfolioView,
      meta: {
        requires_auth: true
      }
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
      meta: {
        requires_auth: true
      },
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
        },
        {
          path: 'manage-portfolio',
          name: 'manage-portfolio',
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

// Route guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = getCookie(LOGGED_IN_KEY)
  console.log('ROuter', isLoggedIn)
  if (to.matched.some((record) => record.meta.requires_auth)) {
    if (isLoggedIn) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    if (isLoggedIn && ['login', 'signup'].includes(to.name)) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  }
})

export default router
