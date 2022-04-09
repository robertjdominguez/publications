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
      author {
        name
        slug
        blurb
        image {
          url
        }
      }
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
  entries(where: {year: {year: $year}}, orderBy: contentType_ASC) {
    title
    image {
      url
    }
    author {
      name
      slug
      blurb
      image {
        url
      }
    }
    slug
    contentType
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
    author {
      name
      slug
      blurb
      image {
        url
      }
    }
    image {
      url
    }
    contentType
  }
}
`;

export const dragonPagesQuery = `
query dragonPagesQuery($year: String!) {
  pages(where: {year: {year: $year}}) {
    id
    backgroundColor {
      hex
    }
    entries {
      id
      title
      slug
      author {
        name
        slug
        blurb
        image {
          url
        }
      }
      body {
        html
      }
    }
  }
}

`;

export const singleDragonPage = `
query singleEntryQuery($id: ID!) {
  page(where: {id: $id}) {
    id
    backgroundColor {
      hex
    }
    entries {
      title
      author {
        name
        slug
        blurb
        image {
          url
        }
      }
      body {
        html
      }
    }
  }
}
`;

export const beaconAuthorQuery = `
query BeaconAuthor($slug: String = "") {
  author(where: {slug: $slug}) {
    id
    name
    slug
    blurb
    image {
      url
    }
    entries(orderBy: createdAt_ASC) {
      id
      slug
      title
      year {
        year
      }
    }
  }
}
`;

export const allBeaconAuthorsQuery = `
query MyQuery {
  authors {
    id
    name
    slug
  }
}
`;

export const pagesQuery = `
query MyQuery($year: String = "") {
  year(where: {year: $year}) {
    id
    introduction {
      html
    }
    year
    coverArt {
      url
    }
    pages {
      id
      layout
      backgroundColor {
        hex
      }
      year {
        year
      }
      entries {
        title
        author
        contentType
        body {
          html
        }
        image {
          url
        }
      }
    }
  }
}
`;

export const singlePageQuery = `
query MyQuery($id: ID = "") {
  page(where: {id: $id}) {
    backgroundColor {
      hex
    }
    entries {
      title
    }
  }
}
`;

export const yearPagesQuery = `
query MyQuery($year: String = "") {
  pages(where: {year: {year: $year}}) {
    id
    entries {
      title
    }
    backgroundColor {
      hex
    }
  }
}
`;
