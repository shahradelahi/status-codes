# @se-oss/status-codes

[![CI](https://github.com/shahradelahi/status-codes/actions/workflows/ci.yml/badge.svg)](https://github.com/shahradelahi/status-codes/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@se-oss/status-codes.svg)](https://www.npmjs.com/package/@se-oss/status-codes)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](/LICENSE)
[![Install Size](https://packagephobia.com/badge?p=@se-oss/status-codes)](https://packagephobia.com/result?p=@se-oss/status-codes)

**@se-oss/status-codes** offers strongly typed utilities to safely convert between HTTP status phrases and their numeric codes. Enjoy full TypeScript type safety and compile-time checks in your projects.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [References](#-references)
- [License](#license)

## 📦 Installation

```bash
npm i @se-oss/status-codes
```

## 📖 Usage

<!-- prettier-ignore -->
```typescript
import { getStatusCode, getStatusPhrase, StatusCodes, StatusPhrases } from '@se-oss/status-codes';

getStatusPhrase(200); // returns 'Ok'
getStatusPhrase(StatusCodes.CREATED); // returns 'Created'
getStatusPhrase(418); // returns "I'm a teapot"

getStatusCode('OK'); // returns 200
getStatusCode('CREATED'); // returns 201

console.log(StatusCodes.FORBIDDEN); // prints 403
console.log(StatusPhrases.IM_A_TEAPOT); // prints "I'm a teapot"
```

## 📚 Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@se-oss/status-codes).

##### API

<!-- prettier-ignore -->
```typescript
/**
 * Returns the HTTP status code for a given status phrase.
 *
 * @param phrase - The HTTP status phrase
 * @returns The corresponding HTTP status code
 * @throws {TypeError} If input is not valid or phrase is unknown
 */
declare function getStatusCode<T, U>(phrase: T): U;

/**
 * Returns the HTTP status phrase for a given status code.
 *
 * @param code - The HTTP status code
 * @returns The corresponding HTTP status phrase
 * @throws {TypeError} If input is not valid or code is unknown
 */
declare function getStatusPhrase<T, C, U>(code: T): U;
```

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/status-codes).

Thanks again for your support, it is much appreciated! 🙏

## 📑 References

- MDN Web Docs: [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/status-codes/graphs/contributors).
