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
