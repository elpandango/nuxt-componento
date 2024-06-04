export default {
    async get(query: string) {
        if (!query) {
            return $fetch('/api/get-components');
        }
        return $fetch(`/api/get-components?query=${query}`);
    },
    async getComponent(id: string) {
        return await $fetch(`/api/component/${id}`);
    },
    async add(payload: any) {
        return await $fetch('/api/component', {
            method: 'post',
            body: {
                title: payload.title,
                type: payload.type,
                code: payload.code,
            }
        });
    },
    async update(id: string, payload: any,) {
        return await $fetch(`/api/component/${id}`, {
            method: 'put',
            body: {
                title: payload.title,
                type: payload.type,
                code: payload.code,
            }
        });
    },
    async delete(id: string) {
        return await $fetch(`/api/component/${id}`, {
            method: 'delete'
        });
    },
    async getTypes() {
        return $fetch('/api/get-component-types');
    },
};
