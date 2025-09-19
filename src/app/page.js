import { promises as fs } from 'fs'

import Work from "@/components/Work/Work";

export default async function Home() {

    const fileContent = await fs.readFile(process.cwd() + '/src/data/home.json', 'utf8')
    const pageData = JSON.parse(fileContent);

    return <div>
        <Work pageData={pageData} />
    </div>
}
