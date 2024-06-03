import {ComponentModel} from "~/server/models/componentModel";
import {CustomError} from "~/server/interfaces/error";

export const getSingleComponent = async (componentId: string) => {
    try {
        const component = await ComponentModel.findById(componentId);
        // if (!component) {
        //     generateError({statusCode: 404, message: 'Could not find component.'});
        // }
        return {
            status: 200,
            message: 'Component fetched.',
            component: component
        };
    } catch (err: any) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
};