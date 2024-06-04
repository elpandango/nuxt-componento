import {getAllTypes} from "~/server/controllers/componentController/getAllTypes";

export default defineEventHandler(async (event) => {
    return await getAllTypes();
});