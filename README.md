# nodejs-file-storage
File storage REST API built using Node.js, Express and Multer
- Feature 1 : Implementing 
Requirements:
- One image per request.
- Field name: image.
- Allowed formats: JPEG, PNG, WebP.
- Maximum size: 5 MB.
- Storage: Local uploads/ directory.
- Missing file: Return HTTP 400.
- Successful upload: Return HTTP 201 with file details.

Unique Idenitfication
- Currently when u upload same file its being overwritten 
- and that same file is being replace
- if i upload two times i should show both times so
- instead of using original file name using random uuid + path 
- for every file unique name is generated! no override issue 