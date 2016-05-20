var React     = require('react'),
    ReactDOM  = require('react-dom'),
    _         = require('lodash');







var PlanetForm = React.createClass({
      getInitialState: function(){
        return {planets: [], savePlanets: [], radius: 20, systemName: "TestSystem", name: "TestPlanet", rotation: .01, tilt: 0, starRadius: 60, starBrightness: 2, starRed: 200, starGreen: 200, starBlue: 100, orbitMultiplier: 400, orbitPeriod: .0005}
      },

      handleSave: function(event){
        event.preventDefault();
        var state = this.state
        var self = this;
        var namebox = document.getElementById('sysname-box')
        state.systemName = namebox.value
        this.setState(state);

        // var testPlanets = JSON.stringify(this.state.savePlanets)
        var sendPlanets = []
        state.savePlanets.map(function(planet, i){
          sendPlanets.push(planet)
        });

        console.log(sendPlanets)

        state.planets = []
        var contents = {
          nameOfSystem: state.systemName,
          state: state,
          planets: JSON.stringify(sendPlanets)
        }
        // var contents = JSON.stringify(this.state)
        console.log(contents)
        $.ajax({
          url: '/systems/build',
          type: 'post',
          data: contents,
          dataType: 'json',
          success: function(){
            console.log('system sent')
          },
          error: function(err){
            console.log(err)
          }
        })
      },

      handleRadiusChange: function(event){
        var state = this.state;
        state.radius = event.target.value;
        this.setState(state);
      },
      handleNameChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.name = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      handleRotationChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.rotation = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      handleTiltChange: function(event){
        var state = this.state;
        state.tilt = event.target.value;
        this.setState(state);
      },

      radiusUp: function(event){
        event.preventDefault()
        var state = this.state;
        var radius = state.radius;
        radius = parseFloat(radius) + 1;
        state.radius = radius;
        this.setState(state);
      },

      radiusDown: function(event){
        event.preventDefault()
        var state = this.state;
        var radius = state.radius;
        radius = parseFloat(radius) - 1;
        state.radius = radius;
        this.setState(state);
      },

      rotationUp: function(event){
        event.preventDefault()
        var state = this.state;
        var rotation = state.rotation;
        rotation = parseFloat(rotation) + parseFloat(.01);
        state.rotation = rotation;
        this.setState(state);
      },

      rotationDown: function(event){
        event.preventDefault()
        var state = this.state;
        var rotation = state.rotation;
        rotation = parseFloat(rotation) - parseFloat(.01);
        state.rotation = rotation;
        this.setState(state);
      },

      tiltUp: function(event){
        event.preventDefault()
        var state = this.state;
        var tilt = state.tilt;
        tilt = tilt + .01;
        state.tilt = tilt;
        this.setState(state);
      },

      tiltDown: function(event){
        event.preventDefault()
        var state = this.state;
        var tilt = state.tilt;
        tilt = tilt - .01;
        state.tilt = tilt;
        this.setState(state);
      },

      starRadiusUp: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var radius = state.starRadius;
        radius = radius + 5;
        state.starRadius = radius;
        this.setState(state);
        console.log(this.state)
      },

      starRadiusDown: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var radius = state.starRadius;
        radius = radius - 5;
        state.starRadius = radius;
        this.setState(state);
        console.log(this.state)
      },

      handleStarRedChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.starRed = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      handleStarGreenChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.starGreen = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      handleStarBlueChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.starBlue = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      starBrightnessUp: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var brightness = state.starBrightness;
        brightness = brightness + .5;
        state.starBrightness = brightness;
        this.setState(state);
        console.log(this.state)
      },

      starBrightnessDown: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var brightness = state.starBrightness;
        brightness = brightness - .5;
        state.starBrightness = brightness;
        this.setState(state);
        console.log(this.state)
      },

      handleOrbitMultiplierChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.orbitMultiplier = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      orbitMultiplierUp: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var orbit = state.orbitMultiplier;
        orbit = parseFloat(orbit) + 100;
        state.orbitMultiplier = orbit;
        this.setState(state);
        console.log(this.state)
      },

      orbitMultiplierDown: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var orbit = state.orbitMultiplier;
        orbit = parseFloat(orbit) - 100;
        state.orbitMultiplier = orbit;
        this.setState(state);
        console.log(this.state)
      },

      handleOrbitPeriodChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.orbitPeriod = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      orbitPeriodUp: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var period = state.orbitPeriod;
        period = parseFloat(period) + .001;
        state.orbitPeriod = period;
        this.setState(state);
        console.log(this.state)
      },

      orbitPeriodDown: function(event){
        event.preventDefault()
        console.log(event.target.value)
        var state = this.state;
        var period = state.orbitPeriod;
        period = parseFloat(period) - .001;
        state.orbitPeriod = period;
        this.setState(state);
        console.log(this.state)
      },

      handleAddPlanet: function(event){
        event.preventDefault();
        var self = this;
        var state = this.state
        var namebox = document.getElementById('name-box')

        state.name = namebox.value


        var planetGeometry = new THREE.SphereGeometry(self.state.radius, 32, 32)

        var loader = new THREE.TextureLoader();


        var material = new THREE.MeshPhongMaterial()
          if (this.state.radius < 10) {
            material.map = loader.load('/images/mercurymap.jpg')
            material.bumpMap = loader.load('/images/mercurybump.jpg')
          } else if (this.state.radius >= 10 && this.state.radius < 20) {
            material.map = loader.load('/images/marsmap1k.jpg')
            material.bumpMap = loader.load('/images/marsbump1k.jpg')
          } else if (this.state.radius >= 20 && this.state.radius < 35) {
            material.map = loader.load('/images/earthmap1k.jpg')
            material.bumpMap = loader.load('/images/earthbump1k.jpg')
            material.specularMap = loader.load('/images/earthspec1k.jpg')
          } else if (this.state.radius >= 35 && this.state.radius < 50) {
            material.map = loader.load('/images/neptunemap.jpg')
          } else if (this.state.radius >= 50 ) {
            material.map = loader.load('/images/jupitermap.jpg')
          }


        var planet = new THREE.Mesh(planetGeometry, material)
        planet.name = self.state.name
        planet.userData.rotation = self.state.rotation
        planet.userData.orbitPeriod = self.state.orbitPeriod
        planet.userData.orbitMultiplier = self.state.orbitMultiplier
        planet.castShadow = true
        planet.receiveShadow = true

        var savePlanet = {}

        savePlanet.name = planet.name

        savePlanet.rotation = planet.userData.rotation
        savePlanet.orbitPeriod = planet.userData.orbitPeriod
        savePlanet.orbitMultiplier = planet.userData.orbitMultiplier
        savePlanet.radius = self.state.radius
        savePlanet.castShadow = true
        savePlanet.receiveShadow = true
        savePlanet.id = planet.id

        console.log("save planetx-------------------------------")
        console.log(planet)
        console.log(savePlanet)
        console.log("save planetx-------------------------------")


        // scene.add(planet);

        self.state.planets.push(planet);
        self.state.savePlanets.push(savePlanet)
        self.setState(state);

        console.log(self.state.planets)
      },
      planetRemove: function(id){
        var self = this;
        var state = this.state;
        console.log(id);
        state.planets.map(function(planet, i){
          var index = state.planets.indexOf(planet)
          if (planet.id === id) {
            state.planets.splice(index, 1)
            self.setState(state)
          }
        })

        state.savePlanets.map(function(planet, i){
          var index = state.planets.indexOf(planet)
          if (planet.id === id) {
            state.planets.splice(index, 1)
            self.setState(state)
          }
        })
      },

      addMoon: function(id){
        var self = this;
        var state = this.state;
        console.log(id);
        state.planets.map(function(planet, i){
          var index = state.planets.indexOf(planet)
          if (planet.id === id) {
            var loader = new THREE.TextureLoader();
            var moonGeometry  = new THREE.SphereGeometry(planet.geometry.boundingSphere.radius / 5 + Math.random() * 2, 32, 32)
            var moonMaterial  = new THREE.MeshPhongMaterial()
              if (planet.userData.orbitMultiplier < 200) {
                moonMaterial.map = loader.load('/images/venusmap.jpg')
                moonMaterial.bumpMap = loader.load('/images/venusbump.jpg')
              } else if (planet.userData.orbitMultiplier >= 200 && planet.userData.orbitMultiplier < 600) {
                moonMaterial.map = loader.load('/images/moonmap1k.jpg')
                moonMaterial.bumpMap = loader.load('/images/moonbump1k.jpg')
              } else if (planet.userData.orbitMultiplier >= 600 ) {
                moonMaterial.map = loader.load('/images/plutomap1k.jpg')
              }
            var moon  = new THREE.Mesh(moonGeometry, moonMaterial)

            moonMaterial.castShadow = true
            moonMaterial.receiveShadow = true


            moon.userData.rotation = .01
            moon.userData.orbitPeriod = .002 + Math.random() * .01
            moon.userData.orbitMultiplier = planet.geometry.boundingSphere.radius * 2 + Math.random()
            moon.castShadow = true
            moon.receiveShadow = true

            planet.children.push(moon)
            console.log(moon)
            console.log(planet)

            self.setState(state)
          }
        })
      },
      addRing: function(id){
        var self = this;
        var state = this.state;
        console.log(id);
        state.planets.map(function(planet, i){
          var index = state.planets.indexOf(planet)
          if (planet.id === id) {
            var loader = new THREE.TextureLoader();
            var moonGeometry  = new THREE.SphereGeometry(planet.geometry.boundingSphere.radius / 5 + Math.random() * 2, 32, 32)
            var moonMaterial  = new THREE.MeshStandardMaterial()
            // moonMaterial.map = loader.load('/images/saturnringcolor.jpg')
            var color = new THREE.Color("rgb(" + self.state.starRed + "," + self.state.starGreen + "," + self.state.starBlue + ")")
            moonMaterial.emmissive = color
            var moon  = new THREE.Mesh(new THREE.RingGeometry(3 * planet.geometry.boundingSphere.radius, planet.geometry.boundingSphere.radius * 10, 32), moonMaterial)
            console.log("-------MOOON!")
            console.log(moon)
            console.log("-------MOOON!")


            // createRings(radius, segments) { return new THREE.Mesh(new THREE.XRingGeometry(1.2 * radius, 2 * radius, 2 * segments, 5, 0, Math.PI * 2), new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('https://cdn.rawgit.com/bubblin/The-Solar-System/master/images/page-60/saturn-rings.png'), side: THREE.DoubleSide, transparent: true, opacity: 0.6 })); }


            // moon.userData.rotation = .01
            // moon.userData.orbitPeriod = .002 + Math.random() * .01
            // moon.userData.orbitMultiplier = planet.geometry.boundingSphere.radius * 2 + Math.random()
            // moon.castShadow = true
            // moon.receiveShadow = true

            planet.children.push(moon)
            console.log(moon)
            console.log(planet)

            self.setState(state)
          }
        })
      },
      render: function(){
        document.getElementById('planet-preview').innerHTML = ''
        document.getElementById('zone-container').innerHTML = ''
        var container = document.getElementById('zone-container')
        var self = this

        var planetScene = new THREE.Scene();
        planetScene.name = "planetScene"

        var starScene = new THREE.Scene();
        starScene.name = "starScene"

        var planetCamera = new THREE.PerspectiveCamera(75, 250 / 250, 0.1, 10000);
        planetCamera.name = "planetCamera"

        var starCamera = new THREE.PerspectiveCamera(45, 1200 / 600, 0.1, 10000);
        starCamera.name = "starCamera"
        starCamera.lookAt(starScene.position)
        console.log(starCamera)

        var planetRenderer = new THREE.WebGLRenderer();
        planetRenderer.setSize( 250, 250 );

        var starRenderer = new THREE.WebGLRenderer();
        starRenderer.shadowMapEnabled = true;
        starRenderer.setSize( 1200, 600 );


        planetScene.add(planetCamera)
        starScene.add(starCamera)

        planetCamera.position.z = 100
        starCamera.position.z = 1000




    // Orbit controls!  They work great. If they are commented out it means I got trackball controls to work

        // var starControls = new THREE.OrbitControls( starCamera, starRenderer.domElement );
				// //controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
				// starControls.enableDamping = true;
				// starControls.dampingFactor = 0.25;
				// starControls.enableZoom = false;

        var planetControls = new THREE.OrbitControls( planetCamera, planetRenderer.domElement );
				//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
				planetControls.enableDamping = true;
				planetControls.dampingFactor = 0.25;
				planetControls.enableZoom = false;

    // Fly controls!  THey are dumb garbage.

        // var controls = new THREE.FlyControls( starCamera );
				// controls.movementSpeed = 1000;
				// controls.domElement = container;
				// controls.rollSpeed = Math.PI / 24;
				// controls.autoForward = false;
				// controls.dragToLook = false;




        document.getElementById('planet-preview').appendChild(planetRenderer.domElement)
        document.getElementById('zone-container').appendChild(starRenderer.domElement)

    // Trackball Controls!  Hopefully these work.  UPDATE!  They do work, their event listeneres dominate
    // the whole page.  Working on it.

        var starControls = new THREE.TrackballControls( starCamera, starRenderer.domElement );

        var stats = new Stats();
        container.appendChild( stats.dom );

        starControls.rotateSpeed = 1.4;
        starControls.zoomSpeed = 1.8;
        starControls.panSpeed = 1.6;
        starControls.noZoom = false;
        starControls.noPan = false;

        starControls.staticMoving = true;
        starControls.dynamicDampingFactor = 0.3;

        starControls.keys = [ 65, 83, 68 ];

        starControls.addEventListener( 'change', animate );


        var loader = new THREE.TextureLoader();

        var planetGeometry = new THREE.SphereGeometry(self.state.radius, 32, 32)

        var material = new THREE.MeshPhongMaterial()
          if (this.state.radius < 10) {
            material.map = loader.load('/images/mercurymap.jpg')
            material.bumpMap = loader.load('/images/mercurybump.jpg')
          } else if (this.state.radius >= 10 && this.state.radius < 20) {
            material.map = loader.load('/images/marsmap1k.jpg')
            material.bumpMap = loader.load('/images/marsbump1k.jpg')
          } else if (this.state.radius >= 20 && this.state.radius < 35) {
            material.map = loader.load('/images/earthmap1k.jpg')
            material.bumpMap = loader.load('/images/earthbump1k.jpg')
            material.specularMap = loader.load('/images/earthspec1k.jpg')
          } else if (this.state.radius >= 35 && this.state.radius < 50) {
            material.map = loader.load('/images/neptunemap.jpg')
          } else if (this.state.radius >= 50 ) {
            material.map = loader.load('/images/jupitermap.jpg')
          }

        var color = new THREE.Color("rgb(" + this.state.starRed + "," + this.state.starGreen + "," + this.state.starBlue + ")");
        var starGeometry = new THREE.SphereGeometry(this.state.starRadius, 32, 32)
        var starMaterial = new THREE.MeshPhongMaterial()
        starMaterial.map = loader.load('/images/sunmap.jpg')
        // starMaterial.color = color
        starMaterial.emissive = color
        var star  = new THREE.Mesh(starGeometry, starMaterial)
        // star.opacity = .5

        // var star = THREEx.Planets.createSun()
        // star.castShadow = true
        // star.receiveShadow = true


        var fieldGeometry  = new THREE.SphereGeometry(2000, 32, 32)
        var fieldMaterial  = new THREE.MeshBasicMaterial()
        fieldMaterial.map   = loader.load('/images/galaxy_starfield.png')
        fieldMaterial.side  = THREE.BackSide
        var fieldMesh  = new THREE.Mesh(fieldGeometry, fieldMaterial)
        var fieldMesh2  = new THREE.Mesh(fieldGeometry, fieldMaterial)


        var hemiLight = new THREE.HemisphereLight(0x000000, 0x000000, 0.6);


        console.log(star)

        this.state.planets.map(function(planet, i){
          starScene.add(planet);
        })

        var planetGeometry2 = new THREE.SphereGeometry(self.state.radius, 32, 32)
        var material2 = new THREE.MeshPhongMaterial()
        var color2 = new THREE.Color("rgb(50,50,200)");
        material2.emissive = color2
        material2.opacity = .4
        material2.transparent = true







        var planet = new THREE.Mesh(planetGeometry, material)
        var planet2 = new THREE.Mesh(planetGeometry2, material2)

        console.log("---------------PLANET 2!-----------")
        console.log(planet2)
        console.log("---------------PLANET 2!-----------")

        planet.name = self.state.name
        planet.rotation.z = self.state.tilt;

        planetScene.add(planet);
        planetScene.add(fieldMesh2)
        starScene.add(star)
        starScene.add(fieldMesh)
        starScene.add(planet2)
        // starScene.add(spotLight)

        starScene.add(hemiLight)



        var pointLight = new THREE.PointLight(0xFFFAFF);

        pointLight.position.x = 10;
        pointLight.position.y = 10;
        pointLight.position.z = 190;



        var pointLight2 = new THREE.PointLight(0xFFFAFF);

        pointLight2.position.x = 0;
        pointLight2.position.y = 0;
        pointLight2.position.z = 0;
        pointLight2.castShadow = true;
        pointLight2.intensity = this.state.starBrightness
        pointLight2.color = color

        planetScene.add(pointLight)
        starScene.add(pointLight2)



        // function onWindowResize() {
        //
  			// 	starCamera.aspect = container.innerWidth / container.innerHeight;
  			// 	starCamera.updateProjectionMatrix();
        //
  			// 	starRenderer.setSize( container.innerWidth, container.innerHeight );
        //
  			// 	starControls.handleResize();
        //
  			// 	renderStar();
        //
			  // }

        function animate() {

              // requestAnimationFrame( animate );



			  }
        // animate()


        function renderStar(){

          // requestAnimationFrame(animate)
          requestAnimationFrame(renderStar)
          starControls.update();
          var previewTime = performance.now() * self.state.orbitPeriod


          self.state.planets.map(function(planet, i){
            var time = performance.now() * planet.userData.orbitPeriod;
            planet.rotation.y += planet.userData.rotation;
            planet.position.x = Math.cos( time ) * planet.userData.orbitMultiplier;
            planet.position.z = Math.sin( time ) * planet.userData.orbitMultiplier;
            planet.children.map(function(moon, i){
              moon.rotation.y += moon.userData.rotation;
              var time3 = performance.now() * moon.userData.orbitPeriod;


              // moon.position.set(planet.position.x, planet.position.y, planet.position.z);


              moon.position.x = planet.position.x + Math.cos( time3 ) * moon.userData.orbitMultiplier;
              moon.position.z = planet.position.z + Math.sin( time3 ) * moon.userData.orbitMultiplier;
            })

          })

          planet2.rotation.y += self.state.rotation;

          planet2.position.x = Math.cos( previewTime ) * self.state.orbitMultiplier;
          planet2.position.z = Math.sin( previewTime ) * self.state.orbitMultiplier;

          // var clock = performance.now()

          // var delta = clock.getDelta();

          // star.position.y = Math.cos( time ) * 500;
          // planet2.position.z = Math.sin( time ) * 500;

          // starControls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true

      // Fly controls - they do not work likely will not work in the forseeable future
          // Fly controls ----------------
          // planet.rotation.x += .3;
          // controls.movementSpeed = 0.33;
				  // controls.update( delta );
          stats.update();

          starRenderer.render(starScene, starCamera)

        }

        function renderPlanet(){

          requestAnimationFrame(renderPlanet)


          var time = performance.now() * 0.001

          // planet.position.x = Math.cos( time ) * 100;
          // sun.position.y = Math.sin( time ) * 400;
          // planet.rotation.x += .3;
          planet.rotation.y += self.state.rotation;
          planetControls.update()
          planetRenderer.render(planetScene, planetCamera)


        }

        renderPlanet();
        renderStar();

        return(

          <div id="results-container">
            <div id="star-zone">

              <div className="controlDiv">
                <form className="PlanetForm" onSubmit={this.handleAddPlanet}>
                  <input id="name-box" type="text" placeholder="Name" />
                  <button className="btn btn-primary" type="submit" value="post">Add</button>
                </form>
                <form className="PlanetForm" onSubmit={this.handleSave}>
                  <input id="sysname-box" type="text" placeholder="System Name" />
                  <button className="btn btn-info" type="submit" value="post">Save</button>
                </form>
              </div>
              <div className="controlDiv">
                <label>Radius Controls</label>
                <input type="text" placeholder="Radius" onChange={this.handleRadiusChange} value={this.state.radius}/>
                <form className="PlanetForm" onSubmit={this.radiusUp}>
                  <button className="btn btn-primary" type="submit" value="post">+</button>
                </form>
                <form className="PlanetForm" onSubmit={this.radiusDown}>
                  <button className="btn btn-primary" type="submit" value="post">-</button>
                </form>
              </div>
              <div className="controlDiv">
                <form className="PlanetForm" onSubmit={this.handleSubmit}>
                  <label>Rotation Speed</label>
                  <input type="text" placeholder="Rotation" onChange={this.handleRotationChange} value={this.state.rotation}/>
                </form>
                <form className="PlanetForm" onSubmit={this.rotationUp}>
                  <button className="btn btn-primary" type="submit" value="post">+</button>
                </form>
                <form className="PlanetForm" onSubmit={this.rotationDown}>
                  <button className="btn btn-primary" type="submit" value="post">-</button>
                </form>
              </div>

              <div className="controlDiv">
                <label>Star Radius: {this.state.starRadius}</label>
                <form className="PlanetForm" onSubmit={this.starRadiusUp}>
                  <button className="btn btn-primary" type="submit" value="post">+</button>
                </form>
                <form className="PlanetForm" onSubmit={this.starRadiusDown}>
                  <button className="btn btn-primary" type="submit" value="post">-</button>
                </form>
              </div>
              <div className="controlDiv">
                <label>Star Brightness: {this.state.starBrightness}</label>
                <form className="PlanetForm" onSubmit={this.starBrightnessUp}>
                  <button className="btn btn-primary" type="submit" value="post">+</button>
                </form>
                <form className="PlanetForm" onSubmit={this.starBrightnessDown}>
                  <button className="btn btn-primary" type="submit" value="post">-</button>
                </form>
              </div>
              <div className="controlDiv">
                <label>Star Color (RGB)</label>
                <form className="PlanetForm" onSubmit={this.handleColorSubmit}>
                  <input id="red-box" type="text" placeholder="Red" onChange={this.handleStarRedChange} value={this.state.starRed}/>
                  <input id="red-box" type="text" placeholder="Green" onChange={this.handleStarGreenChange} value={this.state.starGreen}/>
                  <input id="red-box" type="text" placeholder="Blue" onChange={this.handleStarBlueChange} value={this.state.starBlue}/>
                </form>
              </div>

              <div className="controlDiv">
                <label>Orbital Distance: {this.state.orbitMultiplier}</label>
                <input id="red-box" type="text" placeholder="Red" onChange={this.handleOrbitMultiplierChange} value={this.state.orbitMultiplier}/>
                <form className="PlanetForm" onSubmit={this.orbitMultiplierUp}>
                  <button className="btn btn-primary" type="submit" value="post">+</button>
                </form>
                <form className="PlanetForm" onSubmit={this.orbitMultiplierDown}>
                  <button className="btn btn-primary" type="submit" value="post">-</button>
                </form>
              </div>
              <div className="controlDiv">
                <label>Orbital Period: {this.state.orbitPeriod}</label>
                <input id="red-box" type="text" placeholder="Red" onChange={this.handleOrbitPeriodChange} value={this.state.orbitPeriod}/>
                <form className="PlanetForm" onSubmit={this.orbitPeriodUp}>
                  <button className="btn btn-primary" type="submit" value="post">+</button>
                </form>
                <form className="PlanetForm" onSubmit={this.orbitPeriodDown}>
                  <button className="btn btn-primary" type="submit" value="post">-</button>
                </form>
              </div>
            </div>
            <div id="planet-zone">

              <div id="delete-container">
                <div className="controlDiv">
                  {
                    this.state.planets.map(function(planet, i){
                      return <PlanetDiv id={planet.id} name={planet.name} planetRemove={this.planetRemove} addMoon={this.addMoon} addRing={this.addRing} key={i} />
                    }.bind(this))
                  }
                </div>

              </div>
            </div>
          </div>

        )
      }
    })

    // {
    //   this.state.planets.map(function(planet, i){
    //     return <PlanetDiv radius={planet.radius} name={planet.name} location={1} key={i} />
    //   }.bind(this))
    // }
    var PlanetDiv = React.createClass({
      handleSubmit: function(planet){
        this.props.planetRemove(planet)
      },
      handleAddMoon: function(id){
        this.props.addMoon(id)
      },
      handleAddRing: function(id){
        this.props.addRing(id)
      },
      render: function() {
        return (
          <div className="planet-div">
              <span className="planet-name">{this.props.name}</span>
              <input type="hidden" name="id" value={this.props.id} />
              <button className="btn btn-success" onClick={this.handleAddMoon.bind(this, this.props.id)}>M!</button>
              <button className="btn btn-success" onClick={this.handleAddRing.bind(this, this.props.id)}>R!</button>
              <button className="btn btn-danger" onClick={this.handleSubmit.bind(this, this.props.id)}>X</button>
          </div>
        )
      }
    })



    // <div className="controlDiv">
    //   <form className="PlanetForm" onSubmit={this.handleSubmit}>
    //     <label>Axial Tilt</label>
    //     <input id="search-box" type="text" placeholder="Tilt" onChange={this.handleTiltChange} value={this.state.tilt}/>
    //   </form>
    //   <form className="PlanetForm" onSubmit={this.tiltUp}>
    //     <button className="btn btn-primary" type="submit" value="post">+</button>
    //   </form>
    //   <form className="PlanetForm" onSubmit={this.tiltDown}>
    //     <button className="btn btn-primary" type="submit" value="post">-</button>
    //   </form>
    // </div>

    // <div id="planet-zone">
    // <div id='star-zone'>
    // <div id='orbital-zone'>




    ReactDOM.render(<PlanetForm/>, document.getElementById('example'))
