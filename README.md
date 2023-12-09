 QAppWeb

## NOTES:

- [ ] live: I think when DELETE it's returning the object or is the blob
- [X] youtube: change `@angular/youtube-player` for `@justinribeiro/lite-youtube`
  - [ ] styls: revisar bien, algo se podrá hacer...
- [X] scores: change records for scores

### LIVE SELECT
until it's implemented into wasm I'll use the js sdk

### Dev mode
- `npm run watch` because Surreal breaks ng serve at the same time:
  ``` bash
  docker run --rm -v ./dist/browser/:/usr/share/nginx/html -v ./nginx.conf:/etc/nginx/conf.d/default.conf -p 8000:80 nginx:alpine
  ```
### File generators
- generate guard `ng g guard --skip-tests providers/guards/<>`
- generate servi `ng g service --skip-tests providers/services/<>`
- generate class `ng g class --skip-tests --type=model providers/models/<>`
- generate modul `ng g module modules/<>`
- generate compo `ng g component --module modules/<> modules/<>/components/<>`
