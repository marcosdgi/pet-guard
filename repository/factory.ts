import type { $Fetch } from "ohmyfetch"
class HttpFactory {
    private $fetch: $Fetch
    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher
    }

    /**
     * method - GET, POST, PUT
     * URL
     **/
    async call<T>(method: string, url: string, data?: object, extras = {}): Promise<T> {
        const $res: T = await this.$fetch(url, { method, body: data, ...extras, headers: { Authorization: useAuthUserStore().token } })
        return $res
    }
}

export default HttpFactory
