import {ComponentModel} from "~/server/models/componentModel";
import {CustomError} from "~/server/interfaces/error";

interface ComponentBody {
    title?: string;
    type?: string;
    code?: string;
}

export const updateSingleComponent = async (componentId: string, body: ComponentBody) => {
    const title = body?.title || '';
    const type = body?.type || '';
    const code = body?.code || '';

    try {
        const component = await ComponentModel.findById(componentId);
        // if (!edit-component) {
        //     generateError({statusCode: 404, message: 'Could not find post.'});
        // }
        // if (edit-component?.creator._id.toString() !== (<any>req).userId.toString()) {
        //     generateError({statusCode: 403, message: 'Not Authorized!'});
        // }

        component.title = title;
        component.type = type;
        component.code = code;
        const result = await component!.save();

        return {
            status: 200,
            message: 'Post updated.',
            post: result
        };
    } catch (err: any) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
};