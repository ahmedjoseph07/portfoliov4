"use client"
export default function myImageLoader({src, width, quality}){
    if(src.startsWith('https://images.pixels.com')) return src
    return `https://ahmedjoseph07.github.io/${src}?w=${width}&q=${quality || 75}`
}