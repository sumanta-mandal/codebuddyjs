// level {2}

const users = async (user,profile,posts) => {
    
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
    let user = doc[0], Profile = doc[1], p = doc[2];
  
    return {
      user: user,
      profile: Profile,
      posts: p
    };
  }
