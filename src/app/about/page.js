import { promises as fs } from 'fs'

import About from '@/components/About/About';

export default async function aboutPage() {

    const fileContent = await fs.readFile(process.cwd() + '/src/data/about.json', 'utf8')
    const pageData = JSON.parse(fileContent);

    return <div>
        <About pageData={pageData} />
    </div>
}
