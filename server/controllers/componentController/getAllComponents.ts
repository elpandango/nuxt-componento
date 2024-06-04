import {ComponentModel} from "~/server/models/componentModel";
import {CustomError} from "~/server/interfaces/error";

export const getAllComponents = async (query: string, currentPage: number, perPage: number) => {
    try {
        const totalItems: number = await ComponentModel.find().countDocuments();

        let components;

        if (query) {
            components = await ComponentModel.find({
                type: query
            })
                .sort({createdAt: -1})
                .skip((currentPage - 1) * perPage)
                .limit(perPage);
        } else {
            components = await ComponentModel.find()
                .sort({createdAt: -1})
                .skip((currentPage - 1) * perPage)
                .limit(perPage);
        }

        return {
            status: 200,
            components: components,
            totalItems: totalItems,
            currentPage: currentPage,
            hasNextPage: perPage * currentPage < totalItems,
            hasPrevPage: currentPage > 1,
            nextPage: currentPage + 1,
            previousPage: currentPage - 1,
            lastPage: Math.ceil(totalItems / perPage)
        }
    } catch (err) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
};