const fs = require("fs")
const path = require("path")

const sourceDir = path.join(__dirname , "output" , "messy-files")
const organizedDir = path.join(__dirname , "output" , "organized")

const categories = {
    images : [".jpg" , ".jpeg" , ".png" , ".svg" , ".gif" , ".bmp"],
    documents: [".pdf" , ".doc" , ".docx" , ".txt" , "rtf"] ,
    videos: [".mp4" , ".mkv" , ".avi" , ".mov" , ".wmv"] ,
    audios: [".mp3" , ".wav" , ".flac" , ".aac" , ".ogg"],
    codes: [".js" , ".ts" , ".c" , ".cpp" , ".py" , ".html" , ".css" , ".java" , ".go"] ,
    archives: [".zip" , ".rar" , ".tar" , ".gz" , ".7z"],
    spreadsheets: [".xls" , ".xlsx" , ".csv"] ,
    others: []
}

const testFiles = [
    "vacation.jpg" ,
    "report.pdf" ,
    "presentation.pptx" ,
    "music.mp3" ,
    "video.mp4" ,
    "script.js" ,
    "data.csv" ,
    "archive.zip" ,
    "photo.png" ,
    "notes.txt" ,
    "app.py" ,
    "movie.avi" ,
    "song.wav" ,
    "backup.tar.gz",
    "random.xyx" ,
    "nodejs.zip",
]


function initializeDirectories(){
    if(!fs.existsSync(sourceDir)){
        fs.mkdirSync(sourceDir , {recursive: true})
        testFiles.forEach((file)=> {
            fs.writeFileSync(path.join(sourceDir, file) , `Content of ${file}`)
        })
    }
    console.log("messy directories files are created")
}
initializeDirectories()