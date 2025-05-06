import { IBookModel } from "./book.model";

export interface IReadingHistoryModel {
    Books: IBookModel[];
    AccessDate: Date;
}