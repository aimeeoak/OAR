// export function getArticlesByProject(state, project_id) {
//   const articlesByProject = state.articles.filter(article => article.project === project_id);
//   if (articlesByProject.length > 0) {
//     const articles = articlesByProject.map(id => state.articles[id])
//     return articles
//   } 
//   return [];
// }

export function getArticlesByProject(state) {
  const articlesSortedByProject = state.projects.map(project => {
    const articlesByProject = state.articles.filter(article => article.project === project.id);
    return articlesByProject;
  });
  
  return articlesSortedByProject;
}
