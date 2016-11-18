var THREE = require('three');
const SoftwareRenderer = require("../");
var Assert = require("assert");
var Crypto = require('crypto');

describe("Regression tests", function () {
  it("should render a red cube", function () {

// Build scene with cube
    const width = 1024;
    const height = 768;
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.z = 500;
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

// Rotate the cube a bit
    mesh.rotation.x += 0.5;
    mesh.rotation.y += 0.6;

// Render into pixels-array (RGBA)
    const renderer = new SoftwareRenderer();
    renderer.setSize(width, height);
    var imagedata = renderer.render(scene, camera);
    const theData = imagedata.data;

    var hash = Crypto.createHash("md5");
    hash.update(new Uint8Array(theData.buffer));

    Assert.equal(hash.digest("hex"), "4eac664945b8c217427edc12c1504779");
  });
});