#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
    images: [".jpg", ".jpeg", ".png", ".svg", ".gif", ".bmp"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
    videos: [".mp4", ".mkv", ".avi", ".mov", ".wmv"],
    audios: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    codes: [".js", ".ts", ".c", ".cpp", ".py", ".html", ".css", ".java", ".go"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
    others: []
};

const testFiles = [
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt",
    "app.py",
    "movie.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyx",
    "nodejs.zip",
];

function initializeDirectories() {
    if (!fs.existsSync(sourceDir)) {
        fs.mkdirSync(sourceDir, { recursive: true });
        testFiles.forEach((file) => {
            fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
        });
    }
    console.log("Messy files created!");

    if (!fs.existsSync(organizedDir)) {
        fs.mkdirSync(organizedDir, { recursive: true });
    }

    Object.keys(categories).forEach((cat) => {
        const categoryPath = path.join(organizedDir, cat);
        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath);
        }
    });
}

function getCategory(fileName) {
    const ext = path.extname(fileName).toLowerCase();

    for (const category in categories) {
        if (categories[category].includes(ext)) {
            return category;
        }
    }

    return "others";
}

function organizeFiles() {
    const files = fs.readdirSync(sourceDir);

    files.forEach((file) => {
        const category = getCategory(file);
        const src = path.join(sourceDir, file);
        const dest = path.join(organizedDir, category, file);

        fs.renameSync(src, dest);
        console.log(`Moved: ${file} → ${category}`);
    });

    console.log("✔ All files organized successfully!");
}

// Run CLI
function start() {
    console.log("Initializing directories...");
    initializeDirectories();

    console.log("Organizing files...");
    organizeFiles();
}

start();
