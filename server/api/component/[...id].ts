import {getSingleComponent} from "~/server/controllers/componentController/getSingleComponent";
import {updateSingleComponent} from "~/server/controllers/componentController/updateSingleComponent";
import {deleteSingleComponent} from "~/server/controllers/componentController/deleteSingleComponent";

export default defineEventHandler(async (event) => {
    const componentId: string | undefined = event?.context?.params?.id || '';

    if (event._method === 'GET') {
        return await getSingleComponent(componentId);
    }

    if (event._method === 'PUT') {
        const body = await readBody(event);
        return await updateSingleComponent(componentId, body);
    }

    if (event._method === 'DELETE') {
        return await deleteSingleComponent(componentId);
    }
});