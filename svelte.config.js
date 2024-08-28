import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import fs from "fs";

async function getEntries() {

    let entries = fs.readdirSync("src/lib/contents/blog")
        .filter(name => name.endsWith('.md'))
        .map(name => name.replace('.md', '').split(' '))
        .map(split => `/blog/${split[0]}/${split[1]}`);

    entries.push('*');

    return entries;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        prerender: {
            entries: await getEntries()
        }
    }
};

export default config;
