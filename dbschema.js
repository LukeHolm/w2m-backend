let db = {
    users: [
        {
            userId: 'PAOISHP1832U4PLNDFL',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2022-01-12T13:59:50.798Z',
            imageUrl: 'image/OPIWHERP9283TJWEGP9283',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'Stockholm, Sweden'
        }
    ],

    posts: [
        {
            userHandle: 'user',
            body: 'This is the post body',
            createdAt: '2022-01-02T12:56:36.018Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            postId: 'hoashdknasdmikasiug',
            body: `'That's ma' boy!`,
            createdAt: '2022-01-12T13:59:50.798Z'
        }
    ]
};

const userDetails = {
    //Redux data
    credentials: {
        userId: 'PAOISHP1832U4PLNDFL',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2022-01-12T13:59:50.798Z',
        imageUrl: 'image/OPIWHERP9283TJWEGP9283',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Stockholm, Sweden'
    },
    likes: [
        {
            userHandle: 'user',
            postId: 'OIP875oha869HLK'
        }
    ]
}