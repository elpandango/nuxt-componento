import {CustomError} from "~/server/interfaces/error";
import {ComponentModel} from "~/server/models/componentModel";

export default defineEventHandler(async (event) => {
    try {
        // const errors: any = validationResult(req);
        // if (errors?.errors.length > 0) {
        //     generateError({statusCode: 422, message: 'Validation failed, entered data is incorrect.'});
        // }

        const body = await readBody(event);
        const title = body?.title;
        const type = body?.type;
        const code = body?.code;
        const component = new ComponentModel({
            title,
            type,
            code,
        });

        await component.save();

        return {
            status: 201,
            message: 'Component created successfully',
            component: {...(<any>component)._doc},
        }
    } catch (err: any) {
        console.log('error: ', err);
        const error: CustomError = new Error('Internal server error.');
        error.statusCode = 500;
        return error;
    }
});