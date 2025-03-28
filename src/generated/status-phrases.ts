export const StatusPhrases = {
  /**
   * 100 Continue
   *
   * This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/100
   */
  CONTINUE: 'Continue',
  /**
   * 101 Switching Protocols
   *
   * This code is sent in response to an <a href="/en-US/docs/Web/HTTP/Reference/Headers/Upgrade"><code>Upgrade</code></a> request header from the client and indicates the protocol the server is switching to.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/101
   */
  SWITCHING_PROTOCOLS: 'Switching Protocols',
  /**
   * 102 Processing
   *
   * This code was used in <a href="/en-US/docs/Glossary/WebDAV">WebDAV</a> contexts to indicate that a request has been received by the server, but no status was available at the time of the response.
   *
   * @deprecated
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/102
   */
  PROCESSING: 'Processing',
  /**
   * 103 Early Hints
   *
   * This status code is primarily intended to be used with the <a href="/en-US/docs/Web/HTTP/Reference/Headers/Link"><code>Link</code></a> header, letting the user agent start <a href="/en-US/docs/Web/HTML/Attributes/rel/preload">preloading</a> resources while the server prepares a response or <a href="/en-US/docs/Web/HTML/Attributes/rel/preconnect">preconnect</a> to an origin from which the page will need resources.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/103
   */
  EARLY_HINTS: 'Early Hints',
  /**
   * 200 OK
   *
   * <p>The request succeeded. The result and meaning of "success" depends on the HTTP method:</p>
   * <ul>
   * <li><a href="/en-US/docs/Web/HTTP/Reference/Methods/GET"><code>GET</code></a>: The resource has been fetched and transmitted in the message body.</li>
   * <li><a href="/en-US/docs/Web/HTTP/Reference/Methods/HEAD"><code>HEAD</code></a>: Representation headers are included in the response without any message body.</li>
   * <li><a href="/en-US/docs/Web/HTTP/Reference/Methods/PUT"><code>PUT</code></a> or <a href="/en-US/docs/Web/HTTP/Reference/Methods/POST"><code>POST</code></a>: The resource describing the result of the action is transmitted in the message body.</li>
   * <li><a href="/en-US/docs/Web/HTTP/Reference/Methods/TRACE"><code>TRACE</code></a>: The message body contains the request as received by the server.</li>
   * </ul>
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200
   */
  OK: 'OK',
  /**
   * 201 Created
   *
   * The request succeeded, and a new resource was created as a result. This is typically the response sent after <a href="/en-US/docs/Web/HTTP/Reference/Methods/POST"><code>POST</code></a> requests, or some <a href="/en-US/docs/Web/HTTP/Reference/Methods/PUT"><code>PUT</code></a> requests.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/201
   */
  CREATED: 'Created',
  /**
   * 202 Accepted
   *
   * The request has been received but not yet acted upon.
   * It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.
   * It is intended for cases where another process or server handles the request, or for batch processing.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202
   */
  ACCEPTED: 'Accepted',
  /**
   * 203 Non-Authoritative Information
   *
   * This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
   * This is mostly used for mirrors or backups of another resource.
   * Except for that specific case, the <a href="/en-US/docs/Web/HTTP/Reference/Status/200"><code>200 OK</code></a> response is preferred to this status.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/203
   */
  NON_AUTHORITATIVE_INFORMATION: 'Non-Authoritative Information',
  /**
   * 204 No Content
   *
   * There is no content to send for this request, but the headers are useful.
   * The user agent may update its cached headers for this resource with the new ones.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/204
   */
  NO_CONTENT: 'No Content',
  /**
   * 205 Reset Content
   *
   * Tells the user agent to reset the document which sent this request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/205
   */
  RESET_CONTENT: 'Reset Content',
  /**
   * 206 Partial Content
   *
   * This response code is used in response to a <a href="/en-US/docs/Web/HTTP/Guides/Range_requests">range request</a> when the client has requested a part or parts of a resource.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/206
   */
  PARTIAL_CONTENT: 'Partial Content',
  /**
   * 207 Multi-Status
   *
   * Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/207
   */
  MULTI_STATUS: 'Multi-Status',
  /**
   * 208 Already Reported
   *
   * Used inside a <code>&lt;dav:propstat&gt;</code> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/208
   */
  ALREADY_REPORTED: 'Already Reported',
  /**
   * 226 IM Used
   *
   * The server has fulfilled a <a href="/en-US/docs/Web/HTTP/Reference/Methods/GET"><code>GET</code></a> request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/226
   */
  IM_USED: 'IM Used',
  /**
   * 300 Multiple Choices
   *
   * In <a href="/en-US/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation">agent-driven content negotiation</a>, the request has more than one possible response and the user agent or user should choose one of them.
   * There is no standardized way for clients to automatically choose one of the responses, so this is rarely used.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/300
   */
  MULTIPLE_CHOICES: 'Multiple Choices',
  /**
   * 301 Moved Permanently
   *
   * The URL of the requested resource has been changed permanently. The new URL is given in the response.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301
   */
  MOVED_PERMANENTLY: 'Moved Permanently',
  /**
   * 302 Found
   *
   * This response code means that the URI of requested resource has been changed <em>temporarily</em>.
   * Further changes in the URI might be made in the future, so the same URI should be used by the client in future requests.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302
   */
  FOUND: 'Found',
  /**
   * 303 See Other
   *
   * The server sent this response to direct the client to get the requested resource at another URI with a <a href="/en-US/docs/Web/HTTP/Reference/Methods/GET"><code>GET</code></a> request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303
   */
  SEE_OTHER: 'See Other',
  /**
   * 304 Not Modified
   *
   * This is used for caching purposes.
   * It tells the client that the response has not been modified, so the client can continue to use the same <a href="/en-US/docs/Web/HTTP/Guides/Caching">cached</a> version of the response.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/304
   */
  NOT_MODIFIED: 'Not Modified',
  /**
   * 305 Use Proxy
   *
   * Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy.
   * It has been deprecated due to security concerns regarding in-band configuration of a proxy.
   *
   * @deprecated
   * @see https://developer.mozilla.org#305_use_proxy
   */
  USE_PROXY: 'Use Proxy',
  /**
   * 306 unused
   *
   * This response code is no longer used; but is reserved. It was used in a previous version of the HTTP/1.1 specification.
   *
   * @see https://developer.mozilla.org#306_unused
   */
  UNUSED: 'unused',
  /**
   * 307 Temporary Redirect
   *
   * The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request.
   * This has the same semantics as the <code>302 Found</code> response code, with the exception that the user agent <em>must not</em> change the HTTP method used: if a <a href="/en-US/docs/Web/HTTP/Reference/Methods/POST"><code>POST</code></a> was used in the first request, a <code>POST</code> must be used in the redirected request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/307
   */
  TEMPORARY_REDIRECT: 'Temporary Redirect',
  /**
   * 308 Permanent Redirect
   *
   * This means that the resource is now permanently located at another URI, specified by the <a href="/en-US/docs/Web/HTTP/Reference/Headers/Location"><code>Location</code></a> response header.
   * This has the same semantics as the <code>301 Moved Permanently</code> HTTP response code, with the exception that the user agent <em>must not</em> change the HTTP method used: if a <a href="/en-US/docs/Web/HTTP/Reference/Methods/POST"><code>POST</code></a> was used in the first request, a <code>POST</code> must be used in the second request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/308
   */
  PERMANENT_REDIRECT: 'Permanent Redirect',
  /**
   * 400 Bad Request
   *
   * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
   */
  BAD_REQUEST: 'Bad Request',
  /**
   * 401 Unauthorized
   *
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
   * That is, the client must authenticate itself to get the requested response.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401
   */
  UNAUTHORIZED: 'Unauthorized',
  /**
   * 402 Payment Required
   *
   * The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402
   */
  PAYMENT_REQUIRED: 'Payment Required',
  /**
   * 403 Forbidden
   *
   * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.
   * Unlike <code>401 Unauthorized</code>, the client's identity is known to the server.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403
   */
  FORBIDDEN: 'Forbidden',
  /**
   * 404 Not Found
   *
   * The server cannot find the requested resource.
   * In the browser, this means the URL is not recognized.
   * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
   * Servers may also send this response instead of <code>403 Forbidden</code> to hide the existence of a resource from an unauthorized client.
   * This response code is probably the most well known due to its frequent occurrence on the web.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404
   */
  NOT_FOUND: 'Not Found',
  /**
   * 405 Method Not Allowed
   *
   * The <a href="/en-US/docs/Web/HTTP/Reference/Methods">request method</a> is known by the server but is not supported by the target resource.
   * For example, an API may not allow <code>DELETE</code> on a resource, or the <code>TRACE</code> method entirely.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/405
   */
  METHOD_NOT_ALLOWED: 'Method Not Allowed',
  /**
   * 406 Not Acceptable
   *
   * This response is sent when the web server, after performing <a href="/en-US/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation">server-driven content negotiation</a>, doesn't find any content that conforms to the criteria given by the user agent.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406
   */
  NOT_ACCEPTABLE: 'Not Acceptable',
  /**
   * 407 Proxy Authentication Required
   *
   * This is similar to <code>401 Unauthorized</code> but authentication is needed to be done by a proxy.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407
   */
  PROXY_AUTHENTICATION_REQUIRED: 'Proxy Authentication Required',
  /**
   * 408 Request Timeout
   *
   * This response is sent on an idle connection by some servers, even without any previous request by the client.
   * It means that the server would like to shut down this unused connection.
   * This response is used much more since some browsers use HTTP pre-connection mechanisms to speed up browsing.
   * Some servers may shut down a connection without sending this message.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/408
   */
  REQUEST_TIMEOUT: 'Request Timeout',
  /**
   * 409 Conflict
   *
   * This response is sent when a request conflicts with the current state of the server.
   * In <a href="/en-US/docs/Glossary/WebDAV">WebDAV</a> remote web authoring, <code>409</code> responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/409
   */
  CONFLICT: 'Conflict',
  /**
   * 410 Gone
   *
   * This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
   * Clients are expected to remove their caches and links to the resource.
   * The HTTP specification intends this status code to be used for "limited-time, promotional services".
   * APIs should not feel compelled to indicate resources that have been deleted with this status code.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410
   */
  GONE: 'Gone',
  /**
   * 411 Length Required
   *
   * Server rejected the request because the <a href="/en-US/docs/Web/HTTP/Reference/Headers/Content-Length"><code>Content-Length</code></a> header field is not defined and the server requires it.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/411
   */
  LENGTH_REQUIRED: 'Length Required',
  /**
   * 412 Precondition Failed
   *
   * In <a href="/en-US/docs/Web/HTTP/Guides/Conditional_requests">conditional requests</a>, the client has indicated preconditions in its headers which the server does not meet.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/412
   */
  PRECONDITION_FAILED: 'Precondition Failed',
  /**
   * 413 Content Too Large
   *
   * The request body is larger than limits defined by server.
   * The server might close the connection or return an <a href="/en-US/docs/Web/HTTP/Reference/Headers/Retry-After"><code>Retry-After</code></a> header field.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/413
   */
  CONTENT_TOO_LARGE: 'Content Too Large',
  /**
   * 414 URI Too Long
   *
   * The URI requested by the client is longer than the server is willing to interpret.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/414
   */
  URI_TOO_LONG: 'URI Too Long',
  /**
   * 415 Unsupported Media Type
   *
   * The media format of the requested data is not supported by the server, so the server is rejecting the request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/415
   */
  UNSUPPORTED_MEDIA_TYPE: 'Unsupported Media Type',
  /**
   * 416 Range Not Satisfiable
   *
   * The <a href="/en-US/docs/Web/HTTP/Guides/Range_requests">ranges</a> specified by the <code>Range</code> header field in the request cannot be fulfilled.
   * It's possible that the range is outside the size of the target resource's data.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/416
   */
  RANGE_NOT_SATISFIABLE: 'Range Not Satisfiable',
  /**
   * 417 Expectation Failed
   *
   * This response code means the expectation indicated by the <a href="/en-US/docs/Web/HTTP/Reference/Headers/Expect"><code>Expect</code></a> request header field cannot be met by the server.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/417
   */
  EXPECTATION_FAILED: 'Expectation Failed',
  /**
   * 418 I'm a teapot
   *
   * The server refuses the attempt to brew coffee with a teapot.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418
   */
  IM_A_TEAPOT: "I'm a teapot",
  /**
   * 421 Misdirected Request
   *
   * The request was directed at a server that is not able to produce a response.
   * This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/421
   */
  MISDIRECTED_REQUEST: 'Misdirected Request',
  /**
   * 422 Unprocessable Content
   *
   * The request was well-formed but was unable to be followed due to semantic errors.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422
   */
  UNPROCESSABLE_CONTENT: 'Unprocessable Content',
  /**
   * 423 Locked
   *
   * The resource that is being accessed is locked.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/423
   */
  LOCKED: 'Locked',
  /**
   * 424 Failed Dependency
   *
   * The request failed due to failure of a previous request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/424
   */
  FAILED_DEPENDENCY: 'Failed Dependency',
  /**
   * 425 Too Early
   *
   * Indicates that the server is unwilling to risk processing a request that might be replayed.
   *
   * @experimental
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/425
   */
  TOO_EARLY: 'Too Early',
  /**
   * 426 Upgrade Required
   *
   * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
   * The server sends an <a href="/en-US/docs/Web/HTTP/Reference/Headers/Upgrade"><code>Upgrade</code></a> header in a 426 response to indicate the required protocol(s).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/426
   */
  UPGRADE_REQUIRED: 'Upgrade Required',
  /**
   * 428 Precondition Required
   *
   * The origin server requires the request to be <a href="/en-US/docs/Web/HTTP/Guides/Conditional_requests">conditional</a>.
   * This response is intended to prevent the 'lost update' problem, where a client <a href="/en-US/docs/Web/HTTP/Reference/Methods/GET"><code>GET</code></a>s a resource's state, modifies it and <a href="/en-US/docs/Web/HTTP/Reference/Methods/PUT"><code>PUT</code></a>s it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/428
   */
  PRECONDITION_REQUIRED: 'Precondition Required',
  /**
   * 429 Too Many Requests
   *
   * The user has sent too many requests in a given amount of time (<a href="/en-US/docs/Glossary/Rate_limit">rate limiting</a>).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429
   */
  TOO_MANY_REQUESTS: 'Too Many Requests',
  /**
   * 431 Request Header Fields Too Large
   *
   * The server is unwilling to process the request because its header fields are too large.
   * The request may be resubmitted after reducing the size of the request header fields.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/431
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE: 'Request Header Fields Too Large',
  /**
   * 451 Unavailable For Legal Reasons
   *
   * The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/451
   */
  UNAVAILABLE_FOR_LEGAL_REASONS: 'Unavailable For Legal Reasons',
  /**
   * 500 Internal Server Error
   *
   * The server has encountered a situation it does not know how to handle.
   * This error is generic, indicating that the server cannot find a more appropriate <code>5XX</code> status code to respond with.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/500
   */
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  /**
   * 501 Not Implemented
   *
   * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are <a href="/en-US/docs/Web/HTTP/Reference/Methods/GET"><code>GET</code></a> and <a href="/en-US/docs/Web/HTTP/Reference/Methods/HEAD"><code>HEAD</code></a>.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/501
   */
  NOT_IMPLEMENTED: 'Not Implemented',
  /**
   * 502 Bad Gateway
   *
   * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/502
   */
  BAD_GATEWAY: 'Bad Gateway',
  /**
   * 503 Service Unavailable
   *
   * The server is not ready to handle the request.
   * Common causes are a server that is down for maintenance or that is overloaded.
   * Note that together with this response, a user-friendly page explaining the problem should be sent.
   * This response should be used for temporary conditions and the <a href="/en-US/docs/Web/HTTP/Reference/Headers/Retry-After"><code>Retry-After</code></a> HTTP header should, if possible, contain the estimated time before the recovery of the service.
   * The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503
   */
  SERVICE_UNAVAILABLE: 'Service Unavailable',
  /**
   * 504 Gateway Timeout
   *
   * This error response is given when the server is acting as a gateway and cannot get a response in time.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504
   */
  GATEWAY_TIMEOUT: 'Gateway Timeout',
  /**
   * 505 HTTP Version Not Supported
   *
   * The HTTP version used in the request is not supported by the server.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/505
   */
  HTTP_VERSION_NOT_SUPPORTED: 'HTTP Version Not Supported',
  /**
   * 506 Variant Also Negotiates
   *
   * The server has an internal configuration error: during content negotiation, the chosen variant is configured to engage in content negotiation itself, which results in circular references when creating responses.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/506
   */
  VARIANT_ALSO_NEGOTIATES: 'Variant Also Negotiates',
  /**
   * 507 Insufficient Storage
   *
   * The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/507
   */
  INSUFFICIENT_STORAGE: 'Insufficient Storage',
  /**
   * 508 Loop Detected
   *
   * The server detected an infinite loop while processing the request.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/508
   */
  LOOP_DETECTED: 'Loop Detected',
  /**
   * 510 Not Extended
   *
   * The client request declares an HTTP Extension (<a href="https://datatracker.ietf.org/doc/html/rfc2774" class="external" target="_blank">RFC 2774</a>) that should be used to process the request, but the extension is not supported.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/510
   */
  NOT_EXTENDED: 'Not Extended',
  /**
   * 511 Network Authentication Required
   *
   * Indicates that the client needs to authenticate to gain network access.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/511
   */
  NETWORK_AUTHENTICATION_REQUIRED: 'Network Authentication Required',
} as const;
