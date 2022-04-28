// Acta Diurna Queries
export const allArticlesQuery = `
query AllPostsQuery {
  posts(orderBy: createdAt_DESC, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
      slug
      image {
        url
      }
    }
  }
}
`;

export const SingleArticleQuery = `
query SingleArticleQuery($slug: String!) {
  post(where: { slug: $slug }, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
      slug
      image {
        url
      }
    }
  }
}
`;

// Category query
export const categoryQuery = `
query MyQuery($category: Categories!) {
  posts(where: {category: $category}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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

export const authorsQuery = `
query MyQuery {
  authors {
    id
    name
    slug
  }
}
`;

export const singleAuthorQuery = `
query MyQuery($slug: String!) {
  author(where: {slug: $slug}) {
    id
    name
    post {
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
    years(orderBy: year_DESC, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
      id
      introduction {
        html
      }
      year
      hardcopy {
        url
      }
      coverArt {
        url
      }
    }
  }
`;

export const singleYearQuery = `
query singleYearQuery($year: String = "") {
    year(where: {year: $year}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
      id
      introduction {
        html
      }
      year
      coverArt {
        url
      }
      hardcopy {
        url
      }
    }
  }
  `;

export const allEntriesQuery = `
query allEntriesQuery{
    entries(stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
  entries(where: {year: {year: $year}}, orderBy: contentType_ASC, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
  entry(where: {slug: $slug}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
  pages(where: {year: {year: $year}}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
    id
    backgroundColor {
      hex
    }
    foregroundColor {
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
  page(where: {id: $id}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
    id
    backgroundColor {
      hex
    }
    foregroundColor {
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
  author(where: {slug: $slug}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
  year(where: {year: $year}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
      foregroundColor {
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
  page(where: {id: $id}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
    backgroundColor {
      hex
    }
    foregroundColor {
      hex
    }
    year {
      year
    }
    layout
    entries {
      title
      author
      body {
        html
      }
      image {
        url
      }
    }
  }
}
`;

export const yearPagesQuery = `
query MyQuery($year: String = "") {
  pages(where: {year: {year: $year}}, stage: ${process.env.NEXT_PUBLIC_STAGE}) {
    id
    entries {
      title
    }
    backgroundColor {
      hex
    }
    foregroundColor {
      hex
    }
    year {
      year
    }
  }
}
`;

export const allDragonPagesQuery = `
query AllPagesQuery {
  years(stage: ${process.env.NEXT_PUBLIC_STAGE}) {
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
      foregroundColor {
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
