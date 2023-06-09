export const OVERVIEW = 'overview'
export const TEMPLATE = 'template'
export const SETTINGS = 'settings'
export const PROJECTS = 'projects'
export const BLOGS = 'blogs'
export const SUPPORT = 'support'
export const ALL_PORTFOLIO = 'all-portfolio'
export const ACTIVE_PORTFOLIO = 'active-portfolio'
export const ROUTE_MAP = new Map([
  [OVERVIEW, '/dashboard'],
  [TEMPLATE, '/dashboard/templates'],
  [SETTINGS, '/dashboard/settings'],
  [PROJECTS, '/dashboard/cms/projects'],
  [BLOGS, '/dashboard/cms/blogs'],
  [SUPPORT, '/dashboard/support'],
  [ALL_PORTFOLIO, '/dashboard/all-portfolio'],
  [ACTIVE_PORTFOLIO, '/dashboard/active-portfolio']
])
export const LOCALSTORAGE_KEY = 'templateData'
export const EDITMODE_LOCALSTORAGE_KEY = 'editMode'
export const LOGGED_IN_KEY = 'wgZcuusrWb'
export const STATUS_ENUM = {
  ONLINE: 'online',
  DRAFT: 'draft',
  SCHEDULED: 'scheduled'
}
export const MONTH_MAP = new Map([
  [1, 'Jan'],
  [2, 'Feb'],
  [3, 'Mar'],
  [4, 'Apr'],
  [5, 'May'],
  [6, 'Jun'],
  [7, 'Jul'],
  [8, 'Aug'],
  [9, 'Sep'],
  [10, 'Oct'],
  [11, 'Nov'],
  [12, 'Dec']
])
