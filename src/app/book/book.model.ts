export interface IBookModel {
    id: number;
    title: string;
    author: string;
    publisher: string;
    moreAboutAuthor: string;
    genre: string;
    description: string;
    publishDate: Date;
    categoryId: number;
    filePath: string;
    uploadedAt: Date;
    userId: number;    
    coverImage: string;
    popularity: number;
}

export interface IBookUploadData {
    title: string;
    author: string;
    publisher: string;
    moreAboutAuthor: string;
    genre: string;
    description: string;
    publishYear: number;
}