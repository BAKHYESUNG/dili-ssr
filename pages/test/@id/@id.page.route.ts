import { resolveRoute } from 'vite-plugin-ssr/routing'
import { PageContextClient } from '../../../renderer/types'
import partRegex from 'part-regex'

export default (pageContext: PageContextClient) => {
    // Route guard
    const id = pageContext.urlPathname.split('/')[2]
    console.log('id', id);
    
    if (!id) {
        return false;
    }

    return {
        // We make `id` available as `pageContext.routeParams.id`
        routeParams: { id },
    }
}