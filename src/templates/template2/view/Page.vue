<template>
  <template v-if="loading">
    <div class="w-full h-full felx justify-center items-center">
      <Spinner />
    </div>
  </template>

  <template v-else>
    <Nav :data="templateData.navigation" />
    <div class="container vh100">
      <Main :data="templateData.heroSection" />
      <Projects :data="templateData.projectSection" />
      <Footer :data="templateData.footer" />
    </div>
  </template>
</template>

<script>
import '../assets/style.css'
import { LOCALSTORAGE_KEY, EDITMODE_LOCALSTORAGE_KEY } from '../../../utils/constants'
import Spinner from '../../../components/Spinner.vue'
import Main from '../sections/Main.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Projects from '../sections/About.vue'
import Blog from '../sections/Blog.vue'
import Details from '../sections/Details.vue'
import Mission from '../sections/Mission.vue'

export default {
  components: {
    Spinner,
    Main,
    Nav,
    Footer,
    Projects,
    Blog,
    Details,
    Mission
  },
  data() {
    return {
      loading: true,
      isEditMode: window.localStorage.getItem(EDITMODE_LOCALSTORAGE_KEY) == 'true' ? true : false,
      data: {
        navigation: {
          show: true,
          brandName: {
            type: 'text',
            show: true,
            value: 'Dentocare'
          },
          heroSection: {
            type: 'text',
            show: true,
            value: 'Home'
          },
          aboutSection: {
            type: 'text',
            show: true,
            value: 'About'
          },
          themeController: {
            type: 'boolean',
            show: true
          }
        },
        heroSection: {
          show: true,
          topHeading: {
            type: 'text',
            show: true,
            value: 'Award winning Company'
          },
          title: {
            type: 'text',
            show: true,
            value: 'Digital Marketing Agency and Design'
          },
          deatils: {
            type: 'text',
            show: true,
            value:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
          },
          ctaButton: {
            type: 'text',
            show: true,
            value: 'Get in touch'
          },
          image: {
            type: 'url',
            show: true,
            value: 'https://flowbite.com/docs/images/blog/image-1.jpg'
          }
        },
        projectSection: {
          show: true,
          topHeading: {
            type: 'text',
            show: true,
            value: 'What we do'
          },
          title: {
            type: 'text',
            show: true,
            value: 'Digital Marketing Agency and Design'
          },
          deatils: {
            type: 'text',
            show: true,
            value:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
          }
        },
        footer: {
          show: true,
          footerSection1: {
            show: true,
            brandName: {
              type: 'text',
              show: true,
              value: 'Dentocare Dental'
            },
            brandDetails: {
              type: 'text',
              show: true,
              value: 'Digital Marketing Agency and Design'
            }
          },
          footerSection2: {
            show: true,
            title: {
              type: 'text',
              show: true,
              value: 'Services'
            },
            child: {
              show: true,
              type: 'array',
              value: [
                {
                  link: '#',
                  value: 'SEO'
                },
                {
                  link: '#',
                  value: 'Marketing'
                },
                {
                  link: '#',
                  value: 'Advertisement'
                },
                {
                  link: '#',
                  value: 'Contact us'
                }
              ]
            }
          },
          footerSection3: {
            show: true,
            title: {
              type: 'text',
              show: true,
              value: 'Company'
            },
            child: {
              show: true,
              type: 'array',
              value: [
                {
                  link: '#',
                  value: 'Event'
                },
                {
                  link: '#',
                  value: 'Contact us'
                },
                {
                  link: '#',
                  value: 'Privacy policy'
                },
                {
                  link: '#',
                  value: 'Terms of services'
                }
              ]
            }
          },
          footerSection4: {
            show: true,
            title: {
              type: 'text',
              show: true,
              value: 'Contact Us'
            },
            child: {
              show: true,
              type: 'array',
              value: [
                {
                  link: '#',
                  value: 'Somwhere in India'
                },
                {
                  link: '#',
                  value: 'Somewhere pincode'
                },
                {
                  link: '#',
                  value: '999 - 888 - 777'
                },
                {
                  link: '#',
                  value: 'theadvertisementagency.com@gmail.com'
                }
              ]
            }
          },
          footerSection5: {
            show: true,
            copyRightBrand: {
              type: 'text',
              show: true,
              value: 'Dentocare'
            }
          }
        }
      },
      templateData: {}
    }
  },
  methods: {
    getTemplateData() {
      this.loading = true
      const isUserProtfolio = false
      if (isUserProtfolio) {
        // db calls
      } else {
        console.log('mounted', this.isEditMode)
        if (this.isEditMode) {
          // read from localstorage
          this.templateData = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY))
          this.attachStorageListner()
        } else {
          // default read from template data
          this.templateData = this.data
        }
      }
      this.loading = false
    },
    attachStorageListner() {
      window.addEventListener('storage', () => {
        this.templateData = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY))
      })
    }
  },
  mounted() {
    this.getTemplateData()
  }
}
</script>
