// Acta Diurna Queries
export const allArticlesQuery = `
query AllPostsQuery {
  posts(orderBy: createdAt_DESC) {
    slug
    headline
    hook
    image {
      url
    }
    headline
    publishedAt
    author {
      name
      image {
        url
      }
    }
  }
}
`;

export const SingleArticleQuery = `
query SingleArticleQuery($slug: String!) {
  post(where: { slug: $slug }) {
    headline
    body {
      html
    }
    createdAt
    image {
      url
    }
    videoLink
    author {
      name
      image {
        url
      }
    }
  }
}
`;

// Beacon and Dragon Queries
export const landingQuery = `
query landingQuery {
    landings {
      frontMatter {
        html
      }
    }
  }  
`;

export const allYearsQuery = `
query allYearsQuery {
    years(orderBy: year_DESC) {
      id
      introduction {
        html
      }
      year
      coverArt {
        url
      }
    }
  }
`;

export const singleYearQuery = `
query singleYearQuery($year: String = "") {
    year(where: {year: $year}) {
      id
      introduction {
        html
      }
      year
      coverArt {
        url
      }
    }
  }
  `;

export const allEntriesQuery = `
query allEntriesQuery{
    entries{
      title
      image {
        url
      }
      author
      year {
        year
      }
      slug
      body {
        html
      }
    }
  }  
`;

export const yearlyEntriesQuery = `
query yearlyEntriesQuery($year: String!) {
    entries(where: {year: {year: $year}}) {
      title
      image {
        url
      }
      author
      slug
      body {
        html
      }
    }
  }  
`;

export const singleEntryQuery = `
query singleEntryQuery($slug: String!) {
  entry(where: {slug: $slug}) {
    title
    body {
      html
    }
    author
    image {
      url
    }
    contentType
  }
}
`;
