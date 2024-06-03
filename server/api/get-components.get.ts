import {getAllComponents} from "~/server/controllers/componentController/getAllComponents";

export default defineEventHandler(async (event) => {
    const currentPage: number = +(event?.context?.params?.page) || 1;
    const perPage: number = 10;
    return await getAllComponents(currentPage, perPage);
});