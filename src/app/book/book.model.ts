export interface IBookModel {
    id: number;
    title: string;
    genre: string;
    description: string;
    publishDate: number;
    filePath: string;
    uploadedAt: Date;
    coverImage: string;
    popularity: number;    
}