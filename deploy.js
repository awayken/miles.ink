require("dotenv").config();

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    remoteRoot: process.env.FTP_REMOTE_ROOT,
    localRoot: `${__dirname}/dist`,
    include: ["*", "**/*"],
    deleteRemote: false,
    forcePasv: true,
};

ftpDeploy.on("uploaded", function (data) {
    console.log(
        `✅ (${data.transferredFileCount} / ${
            data.totalFilesCount
        }) Uploaded: ${data.filename}\n`
    );
});

console.log(`⬆️  Going up? ⬆️\n`);

ftpDeploy
    .deploy(config)
    .then(() => console.log("\n🎉 Job's done! 🎉\n"))
    .catch(err => console.log(err));
