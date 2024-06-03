import {ComponentModel} from "~/server/models/componentModel";
import {CustomError} from "~/server/interfaces/error";

export const deleteSingleComponent = async (componentId: string) => {
    try {
        const component = await ComponentModel.findById(componentId);
        // if (!component) {
        //     generateError({statusCode: 404, message: 'Could not find post'});
        // }
        // if (component?.creator.toString() !== (<any>req).userId.toString()) {
        //     generateError({statusCode: 403, message: 'Not Authorized!'});
        // }

        await ComponentModel.findByIdAndDelete(component);

        return {
            status: 200,
            message: 'Component deleted.',
        };
    } catch (err: any) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
};