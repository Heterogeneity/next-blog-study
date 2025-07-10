import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

//从文件地址获取文件列表
function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
}

//读文件数据
function readMDXFiles(filePath: fs.PathOrFileDescriptor) {
    let rawContent = fs.readFileSync(filePath, 'utf-8')
    return matter(rawContent)
}

//展示数据
function getMDXData(dir: string) {
    let mdxFiles = getMDXFiles(dir)
    return mdxFiles.map(file => {
        let {data: metadata, content} = readMDXFiles(path.join(dir, file))
        let slug = path.basename(file, path.extname(file))
        return {
            metadata,
            slug,
            content
        }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'src', 'app', 'blog', 'contents'))
}

export function formatDate(date: string, includeRelative = true) {
    let currentDate = new Date()
    if (!date.includes('T')) {
        date = `${date}T00:00:00`
    }
    let targetDate = new Date(date)
    let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    let daysAgo = currentDate.getDay() - targetDate.getDay()
    let formattedDate = ''
    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}年前`
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}月前`
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}天前`
    } else {
        formattedDate = "Today"
    }
    let fullDate = targetDate.toLocaleDateString(undefined, {
        weekday: "long",
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    if (!includeRelative) {
        return fullDate
    }
    return `${fullDate} (${formattedDate})`
}