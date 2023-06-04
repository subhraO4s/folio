<template>
  <Nav :data="templateData.navigation" />
  <div class="container vh100">
    <Main :data="templateData.heroSection" />
    <Projects :data="templateData.projectSection" />
    <Footer :data="templateData.footer" />
  </div>
</template>

<script>
import '../assets/style.css'
import Main from '../sections/Main.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Projects from '../sections/About.vue'
import Blog from '../sections/Blog.vue'
import Details from '../sections/Details.vue'
import Mission from '../sections/Mission.vue'

export default {
  components: {
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
      templateData: {
        navigation: {
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
            child: [
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
          },
          footerSection3: {
            show: true,
            title: {
              type: 'text',
              show: true,
              value: 'Company'
            },
            child: [
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
          },
          footerSection4: {
            show: true,
            title: {
              type: 'text',
              show: true,
              value: 'Contact Us'
            },
            child: [
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
        }
      }
    }
  }
}
</script>
