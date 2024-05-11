const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseLists = async()=>{
    const query = gql`
    query MyQuery {
        courseLists {
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
          }
          sourceCode
          totalChapters
          tag
        }
      }
      
    `
    const result = await request(MASTER_URL,query);
    return result;
}

export default {
    getAllCourseLists
};