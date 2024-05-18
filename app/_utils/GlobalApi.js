import { gql, request } from 'graphql-request';



const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async()=>{
    const query = gql`
    query MyQuery {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        author
        id
        name
        description
        demoUrl
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        banner {
          url
          bannerCourseList {
            banner {
              bannerCourseList {
                banner {
                  bannerCourseList {
                    banner {
                      bannerCourseList {
                        banner {
                          id
                        }
                        free
                        paid
                      }
                    }
                    free
                    paid
                  }
                }
                paid
                free
              }
            }
            free
            paid
          }
        }
        sourceCode
        totalChapters
        tag
        free
        paid
        slug
      }
    }
    
      
    `
    const result = await request(MASTER_URL,query);
    return result;
}



const getSideBanner = async() =>{
  const query = gql`
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
        
      }
      url
    }
  }
  `
  const result = await request(MASTER_URL,query);
  return result;
}

const getCourseById = async(courseId) =>{
  const query = gql`
  query MyQuery {
    courseList(where: {slug: "`+courseId+`"}) {
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      slug
      sourceCode
      tag
      totalChapters
      author
    }
  }
  `
  const result = await request(MASTER_URL,query);
  return result;
}

export default {
    getAllCourseList,
    getSideBanner,
    getCourseById
}