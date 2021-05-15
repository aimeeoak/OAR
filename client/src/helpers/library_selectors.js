// export function getArticlesByProject(state, project_id) {
//   const articlesByProject = state.articles.filter(article => article.project === project_id);
//   if (articlesByProject.length > 0) {
//     const articles = articlesByProject.map(id => state.articles[id])
//     return articles
//   } 
//   return [];
// }


// need to feed this project id and the state.articles object to select relavent articles 
// export function getArticlesByProject(state) {
//   // const articlesSortedByProject = state.projects.map(project => {
//     const articlesByProject = state.articles.filter(article => article.project === state.projects.id);
//     console.log("articles by project, line 13", articlesByProject)
//     return articlesByProject;
//     // });
    
//     // return articlesSortedByProject;
//   }
  
  
  // need to feed this project id and the state.articles object to select relavent articles 

  const getArticlesByProject = (state, id) => {
  const foundArticles = state.articles.filter((article) => article.project_id === id)
  
  console.log("found articles", foundArticles)
 
  return foundArticles
 }

 export default getArticlesByProject; 
 