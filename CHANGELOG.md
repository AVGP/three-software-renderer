# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Added `CHANGELOG.md`
- Added `package-lock.json` as a repo tracked file
- Added `three` NPM to **peerDependencies**
- Added **engines** property to `package.json`


### Changed
- Upgraded `three` NPM to v0.112.1
- Upgraded `mocha` NPM to v6.2.2
- Upgraded `pngjs` NPM to v3.4.0
- Moved `three` NPM to **devDependencies** in `package.json`
- Dropped `.applyProjection()` in favour of `.applyMatrix4(m)` in `src/projector.js` source file
- Upgraded `src/projector.js` to the latest three.js [source file][three-js-projector-source-link] available in order to encompass when **material.vertexColors** equals:
  - `THREE.VertexColors`
  - `THREE.FaceColors`
- Minor edit in `src/software-renderer.js` in order to encompass when **material.vertexColors** is set to `THREE.VertexColors`

[three-js-projector-source-link]: https://github.com/mrdoob/three.js/blob/dev/examples/js/renderers/Projector.js