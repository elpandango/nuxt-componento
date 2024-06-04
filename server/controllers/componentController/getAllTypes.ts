import {ComponentTypeModel} from "~/server/models/componentTypeModel";
import {CustomError} from "~/server/interfaces/error";

export const getAllTypes = async () => {
    try {
        const componentTypes = await ComponentTypeModel.find();
        return {
            status: 200,
            componentTypes: componentTypes,
        }
    } catch (err) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
};