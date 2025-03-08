export interface IBookModel {
    id: number;
    title: string;
    author: string;
    publisher: string;
    moreAboutAuthor: string;
    genre: string;
    description: string;
    publishDate: Date;
    filePath: string;
    uploadedAt: Date;
    coverImage: string;
    popularity: number;    
}