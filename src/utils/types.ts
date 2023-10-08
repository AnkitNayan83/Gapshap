export type Post = {
    id: string;
    title: string;
    desc: string;
    img: string;
    createdAt: Date;
    votes: number;
    views: number;
    creator: string;
    slug: string;
    catSlug: string;
    userEmail: string;
    comments: Comment[];
};

export type Category = {
    id: string;
    slug: string;
    title: string;
    img: string;
    Posts: Post[];
};

export type User = {};

export type Comment = {
    id: string;
    createdAt: Date;
    desc: string;
    votes: number;
    userEmail: string;
    postSlug: string;
};
