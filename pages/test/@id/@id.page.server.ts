import { PageContextBuiltIn } from "vite-plugin-ssr";
import axios from 'axios';
export { onBeforeRender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { routeParams: { id } } = pageContext;
    // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
    console.log(id);
    const { data } = await axios.get(`https://api.agify.io/?name=${id}`);
    return {
        pageContext: {
            pageProps: { data }
        }
    }
}