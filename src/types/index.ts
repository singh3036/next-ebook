export type Book = {
    id: number;
    title: string;
    description: string;
    coverImage: string;
    tags: string[];
    file: string;
    author: Author;
};

export type Author = {
    name: string;
};
