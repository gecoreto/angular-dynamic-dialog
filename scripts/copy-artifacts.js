const fs = require('fs')
const path = require('path')
const artifacts = ['README.md']
artifacts.forEach(file => {
    let fromPath = path.resolve(__dirname, '..', 'projects/dynamic-dialog/', file)
    let destPath = path.resolve(__dirname, '..', 'dist/angular-dynamic-dialog/', file)
    fs.readFile(fromPath, 'utf-8', (err, data) => {
        if (err) {
            console.log('An error occured:', err)
            return
        }
        fs.writeFile(destPath, data, (err) => {
            if (err) {
                console.log('An error occured:', err)
                return
            }
            console.log(`Copied ${file}:`)
        })
    })
})