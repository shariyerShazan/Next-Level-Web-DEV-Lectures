const os = require("os");

/*  
---------------------------------------------------
 A - os.arch()
---------------------------------------------------
*/
console.log(os.arch());
// → CPU architecture দেয় যেমন: 'x64', 'arm', 'arm64'


/*  
---------------------------------------------------
 C - os.cpus()
---------------------------------------------------
*/
console.log(os.cpus());
// → প্রতিটা CPU core সম্পর্কে বিস্তারিত info দেয়


/*  
---------------------------------------------------
 E - os.endianness()
---------------------------------------------------
*/
console.log(os.endianness());
// → CPU byte order দেখায়, সাধারণত 'LE' (Little Endian)


/*  
---------------------------------------------------
 F - os.freemem()
---------------------------------------------------
*/
console.log(os.freemem());
// → সিস্টেমের ফ্রি RAM কয় Bytes আছে তা দেয়


/*  
---------------------------------------------------
 H - os.homedir()
---------------------------------------------------
*/
console.log(os.homedir());
// → ইউজারের home directory path দেয়


/*  
---------------------------------------------------
 H - os.hostname()
---------------------------------------------------
*/
console.log(os.hostname());
// → আপনার PC/Laptop এর hostname দেয়


/*  
---------------------------------------------------
 L - os.loadavg()
---------------------------------------------------
*/
console.log(os.loadavg());
// → last 1, 5, 15 minutes CPU load average (Linux/Mac only)


/*  
---------------------------------------------------
 N - os.networkInterfaces()
---------------------------------------------------
*/
console.log(os.networkInterfaces());
// → সব network interfaces এর বিস্তারিত info দেয় (IP, MAC…)


/*  
---------------------------------------------------
 P - os.platform()
---------------------------------------------------
*/
console.log(os.platform());
// → OS platform দেয়: 'linux', 'darwin' (Mac), 'win32'


/*  
---------------------------------------------------
 R - os.release()
---------------------------------------------------
*/
console.log(os.release());
// → OS kernel version দেয় যেমন '21.6.0'


/*  
---------------------------------------------------
 T - os.totalmem()
---------------------------------------------------
*/
console.log(os.totalmem());
// → মোট RAM কত Bytes তা দেয়


/*  
---------------------------------------------------
 T - os.tmpdir()
---------------------------------------------------
*/
console.log(os.tmpdir());
// → Temporary folder এর path দেয়


/*  
---------------------------------------------------
 T - os.type()
---------------------------------------------------
*/
console.log(os.type());
// → OS টাইপ দেয়: 'Linux', 'Darwin', 'Windows_NT'


/*  
---------------------------------------------------
 U - os.uptime()
---------------------------------------------------
*/
console.log(os.uptime());
// → সিস্টেম কত সেকেন্ড ধরে চলছে তা দেয়


/*  
---------------------------------------------------
 U - os.userInfo()
---------------------------------------------------
*/
console.log(os.userInfo());
// → বর্তমান OS user এর তথ্য দেয় (uid, username, homedir…)





console.log("\n========= OS INFORMATION =========\n");

console.log("Architecture:", os.arch());
console.log("Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Temporary Folder:", os.tmpdir());

console.log("\n========= MEMORY =========\n");
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory:", os.freemem(), "bytes");

console.log("\n========= CPU =========\n");
console.log("CPU Info:", os.cpus());
console.log("CPU Load Average (1,5,15 min):", os.loadavg());

console.log("\n========= NETWORK =========\n");
console.log(os.networkInterfaces());

console.log("\n========= SYSTEM UPTIME =========\n");
console.log("System Uptime:", os.uptime(), "seconds");
