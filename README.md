# Node.js wrapper for Zipato REST API
Node.js library for the official Zipato REST API. This package requires an account at https://www.zipato.com/ and that you own a Zipabox. Every function does an asynchronous http request to Zipato. For further information see https://www.zipato.com/  

## Table of Contents

1. [Installation](#installation)
1. [Usage](#usage)
1. [Examples](#examples)
1. [Contributing](#contributing)
1. [License](#license)

## Installation

```sh
npm install zipato --save
```

## Usage
See complete command line reference at https://my.zipato.com/zipato-web/api/ (requires login)

## Examples
```javascript
var zipato = require('zipato')
var crypto = require('crypto')

var password = "YOUR_PASSWORD"
var username = "YOUR_USERNAME"

zipato.user.initialize(function(err, resp, body){
  var nonce = body.nonce
  var passwordHash = crypto.createHash('sha1').update(password).digest('hex')
  var token = crypto.createHash('sha1').update(nonce + passwordHash).digest('hex')

  let query = {
    username: username,
    token: token
  }

  zipato.user.login(query, authenticated)
})

function authenticated(err, resp, body){
  zipato.devices.findAll(null, function(err, resp, body){
    console.log(body)
  })
}
```

**[Back to top](#table-of-contents)**

## Contributing

Contact me to discuss potential changes/additions.

**[Back to top](#table-of-contents)**

## License

#### The MIT License

Copyright 2017 Espen Mjøs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included 
    in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[Back to top](#table-of-contents)**







