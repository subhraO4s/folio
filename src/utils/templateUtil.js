import TemplateImage1 from '@/assets/images/template-1.png'
export const templateDetails = [
  {
    tid: 1,
    name: 'Digital agency',
    title: 'Digital Marketing Agency and Design',
    details:
      'A digital design agency website with dedicated blog and projects section and an amazing footer',
    img: TemplateImage1,
    templateLink: '/portfolio-templates/template-2',
    leftButtonAction: () => {
      window.open('/portfolio-templates/template-2', '_blank')
    },
    content: {
      navigation: {
        show: true,
        brandName: {
          type: 'text',
          show: true,
          value: 'Template Company'
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
    }
  }
]
