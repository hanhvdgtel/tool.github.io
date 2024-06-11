'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6440159723d4725c229f80dcef56067f",
"version.json": "8115293b563e0ce8340d96751d890097",
"index.html": "03d0fd34642e598a79f2c48c5478eaa4",
"/": "03d0fd34642e598a79f2c48c5478eaa4",
"main.dart.js": "f306f511734d194f584d56e5aa7c24d4",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f2f15a31b48f1667db6e3c97e20ebd1",
".git/config": "8900c4d58a8eec1ff12330fd660b8c11",
".git/objects/0c/f03d90f3c56ae2fb5b61922e864f608263c60a": "b09d77e443ab8034ae1beaac476f4cff",
".git/objects/50/92f3e66c455ef30b06ed741c3fe410ad06fde8": "c7368c08790fa0263315381a4781b47c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/5c432d3a38e3ec5e7bac2d065fa0ef09d30962": "8ef81278e451fe9756669e31512776de",
".git/objects/35/9b62977d70176185ce6dfb0fedb1a3254c048b": "dcc4cb6c0d4b0cc19b34a0af84d85ae8",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/5c70c065016f5c74746c6102b6345517929da4": "2f7ba415d094b22bfc6952733a430df7",
".git/objects/0b/d9c4a613897968027fe22c2cdd4cfe19677940": "954dfd9ecd08bc4387d08910f97c5d31",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/bd417b85233da693530a87e4819b84a09ec7ce": "953811dd7e5709b3b962cbf9ed61fd70",
".git/objects/b2/cf59339a1ed62232a73c9fa23abc70b20e1b33": "e2f9082a0f059c681d64431f8fa3fb82",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/c8bc0b94c43b9cc9030fbad02bbc68549dff1a": "e529438bb9896ab47490bee3a68816f8",
".git/objects/a5/d178241bf347b6ce38fce3c47e03d782ff4cf1": "9f5bbd7c6490ac1656d69bcc2d6bb52b",
".git/objects/bd/99a2f81badf5cdd083b8cd4e533a0b3bb7d8ed": "1ca6c4c40f68f4657b57b7833999a32c",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/18351e2110391ceaf05d1bbb2e170938be6eba": "925eda206cf1c355b25695a3c16a5416",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/ab708b5709a317e1c4d6557cca3d349101db7f": "3a38b7c477e1d6a864fb3df641ce48b2",
".git/objects/ab/1651ceb71af0b6cdeedbc1cbcad1f0f9556f0a": "808e83ffb96062912f26855aebfd9e5f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b3915a8f210fa3e3d3537caab1884714569f2a": "9ab196c794403a41eb295db1212e9ef8",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/e07f3ec11e5b4cc7f7b367c095631eeb74eb7b": "04c804b2889afe299ac5723c1914de22",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ba97b25b54214b76110102e13788ef5a3f3093": "3b024cb45e16cf2255b92c2907c10bd2",
".git/objects/20/a14beb4adecc6916a76cabeaf290016a40d25e": "102833be898101bd9d152c91ea210c73",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/5db2c4b181bf5dd73c75a9dd70edf23ddd3e8c": "2c5f1728e3d1ce52cd6ff516c7a052ff",
".git/objects/18/26751815c11e48a53785b8d6b0e337b467c145": "2d15d4b00f1f436d1696f8fe80bd3af4",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/df410473cd396fd7abf9b9e35189ee28a69ac0": "19be2770e4174782823bcfaa57e7ab94",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/be4300ab18e42bdc15d47fa7aa889e832de218": "927ed2db1670a50a49af8aa96e88f1d8",
".git/objects/73/1de16ed6938aecab4134c3f8dc43020adf815d": "1072621f1202f722340aea9d4cee554c",
".git/objects/7b/ada1c2a3f83e6ed1300f59c956082e90ed7f4f": "d64e3be0ad28ecbc5a37cad33990006e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/a28eeea2f651f7f6d26450bfdcc6431ec964c9": "61119f15421491715d7700397885c5ba",
".git/objects/21/1438083263be011eb1595905daf6a8e78c5dbd": "858fb734bf00dd8aa2e85679ce2de4e1",
".git/objects/4d/98daa0f3326068d04da3d0524137fdf154a519": "0c182e6eaea8b7127bf35e8ac146d85e",
".git/objects/81/8b74a94102b59b1631905f91c8662c20d9aa4c": "ff6f8fc0510061c83ddf6bef620fec99",
".git/objects/44/296c81bc5111ef558d98e15f13f91be4fb089d": "9d3c38f3f80869f3430275294b921978",
".git/objects/2a/0ade51e2e1cdaa4da75c136eaca6277ef58558": "f3f8f12e5b22aa0a42d2567f849fddbd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/56388f483cda3e000f708c150929c56e1bc530": "4022c8977ccdbcd559df5bfd1c492acb",
".git/objects/07/985463940398ed227994f9f513205c589c0fdc": "d553c37436a214d0e6e6e63e2b5c47aa",
".git/objects/38/0c20da08cf468e8d2d6f79912bdc195ca4dc5a": "94d0c6ad26e8c1a059397a67b4259626",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/54/59fdbd9f27da437c906c15d858ba673eecaa8c": "99fa0d0b3689f19f8ae90b7e1fbb469e",
".git/objects/08/d0c8348a8bb2e69692d57a4cad59b9488296d8": "359e21cf422904e5df2c7f4846751660",
".git/objects/6d/a0d33c0da4bfc6f677f30c373aa060b73e8293": "c3ec1730e43e1e30af3fc34c7b4c03b2",
".git/objects/39/7fa85aa17e763f55e72bb2a27ba0dd96d5d4f1": "a2155e7ca074f18eee3f506473bc5971",
".git/objects/63/8bce48d59e884ffbdc768f7d1c020297cf4a0b": "22ec912816490416e333bf20bbff1df1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d5/c11733663a46741a955a479fec70fa3588ec8b": "b6aaea8c660ecd2913d90ee82df5e7d1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/3bbfb5e541bc6c1dcf9eaeabca1ef0f0f7f57e": "ef82e9e2ead5904ef3ef62a499fde137",
".git/objects/a8/0003e9373faf68a1230bfee5456d6e2edb1e33": "196897db1ee53f0dfedc10a3fae9eb28",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/82e64821f09f5d9d1d8172ef32b41f96331920": "a2693d3850787983590a108beeaf886d",
".git/objects/f9/33664a8276b99ae84b2ce07b7e1762079e440e": "e4dfcb0c63a8bd4dcf45c1bf70e2c6a8",
".git/objects/f0/4e9e8528b18783765d9bd1aadf94f4e9cbd818": "0217baf764c9e1407f5750942968022b",
".git/objects/cb/349f08891634fc3998bcf764fde840e1745597": "60147be12324024b1927a9376947878a",
".git/objects/f8/bffd4b611159190fdc84a66e8c1f653df3febd": "281ff68bed8d937f275a695b6c60f95f",
".git/objects/e0/c7a89d156f5d58e2493031dbab662adc0fbd76": "644cde1eafcec42d6f95be4d5896ad4d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/84/e604d4f3c5541508dff3b69ec2756258b20b7d": "1ee051bb2f35335c8f49079cc6ccb178",
".git/objects/8c/c5bd603c11b80ba84b2ac7e806055aaf62b39b": "2b903e67b579dfd06947c385c6fc05e8",
".git/objects/85/6fc889c8ff5a0ca47f731f43d8db61a8fccbee": "19d23218f1dd4fa56816cf6415baab01",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/97bb20ebfbecb2ac72992b2305a66c646381ea": "760d5916c1b237d9d298ee82aca6b0a7",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/fc85ef2f59b5c27aaedefb7bc7bd3a89205293": "5c65f6e431a5f420622652389a8034d3",
".git/objects/40/32403680db78c54be0623507fbfee067b52a50": "2c42c2ce43babecbd129264a5a53cf48",
".git/objects/40/7732cdb25fd0312752156ade48ba1a94d49fba": "67a63bdd774f562a6beee4aaf76c6d8e",
".git/objects/78/13925533555bc84cad64738552819487310b4f": "a9e24b990de6d12ed56547c7daa90c38",
".git/objects/78/94349985ad84c9786a3da3a0d35c9baa9d1373": "951875305f5d3f62a846dca4440d385b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7029ca0f4d776496a12b10d66eaee3b8",
".git/logs/refs/heads/main": "fb058e04bf985a7afae954208173dca4",
".git/logs/refs/remotes/origin/web": "b4a93dd2ee9c8a8381a9276ccf2d723d",
".git/logs/refs/remotes/origin/dev": "eac2fba7618a8a3a54e4d3872085962c",
".git/logs/refs/remotes/origin/main": "f9b8c19dd38aecb03f66431a7eebc3f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f598ce3d11e22afbe0e1eb5841c9acf3",
".git/refs/remotes/origin/web": "bfd36a4e1ecc9638c956b1edb8747017",
".git/refs/remotes/origin/dev": "15b78b04285a968344cc358299eb9c53",
".git/refs/remotes/origin/main": "6509b6a2fda3fd8ef70c5f56ed794d09",
".git/index": "dfeebb37e3f954bbdb82183a3237a029",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "e08a4048b16809ba6f15b053a1c71189",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "08d55c9a0adbbd028dcb591f04653256",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "1c26451afb9df8aac0239f60efee3d2b",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
