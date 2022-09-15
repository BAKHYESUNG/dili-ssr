import React from 'react'
import { Link } from '../../renderer/Link'
export { Page }

function Page() {
    return (
        <>
            <h1>Welcome</h1>
            This page is:
            <ul>
                <li>Rendered to HTML.</li>
                <li>
                    <Link href="/test/bella">벨라 ssr 테스트</Link>
                </li>
            </ul>
        </>
    )
}
