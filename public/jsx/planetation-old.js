var React     = require('react'),
    ReactDOM  = require('react-dom'),
    _         = require('lodash');







var PlanetForm = React.createClass({
      getInitialState: function(){
        return {planets: [], radius: 20, name: "TestPlanet", rotation: .01, tilt: 0, starRadius: 60, starBrightness: 2, starRed: 200, starGreen: 200, starBlue: 100}
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
        radius = radius + 1;
        state.radius = radius;
        this.setState(state);
      },

      radiusDown: function(event){
        event.preventDefault()
        var state = this.state;
        var radius = state.radius;
        radius = radius - 1;
        state.radius = radius;
        this.setState(state);
      },

      rotationUp: function(event){
        event.preventDefault()
        var state = this.state;
        var rotation = state.rotation;
        rotation = rotation + .01;
        state.rotation = rotation;
        this.setState(state);
      },

      rotationDown: function(event){
        event.preventDefault()
        var state = this.state;
        var rotation = state.rotation;
        rotation = rotation - .01;
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

      handleAddPlanet: function(event){
        event.preventDefault();
        var self = this;
        console.log(this);
        var planetScene = document.getObjectByName( "planetScene" );
        var addPlanet = planetScene.getObjectByName( self.state.name );
        console.log(planetScene)
        console.log(addPlanet)

        var planetGeometry = new THREE.SphereGeometry(self.state.radius, 32, 32)

        var material = new THREE.MeshPhongMaterial()

        var planetMesh = new THREE.Mesh(planetGeometry, material)
        scene.add(planetMesh)

        var planet = new THREE.Mesh(planetGeometry, material)
        console.log(planet)
        scene.add(planet);
        var planetInfo = {
          name: self.state.name,
          radius: self.state.radius
        }
        self.state.planets.push(planetInfo);
        console.log(self.state.planets)
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

        var starCamera = new THREE.PerspectiveCamera(75, 600 / 600, 0.1, 10000);
        starCamera.name = "starCamera"
        starCamera.lookAt(starScene.position)
        console.log(starCamera)

        var planetRenderer = new THREE.WebGLRenderer();
        planetRenderer.setSize( 250, 250 );

        var starRenderer = new THREE.WebGLRenderer();
        starRenderer.setSize( 600, 600 );

        planetScene.add(planetCamera)
        starScene.add(starCamera)

        planetCamera.position.z = 100
        starCamera.position.z = 1000

    // Trackball Controls!  Hopefully these work.  UPDATE!  They do not.

        var starControls = new THREE.TrackballControls( starCamera );

        var stats = new Stats();
        container.appendChild( stats.dom );

        starControls.rotateSpeed = 1.0;
        starControls.zoomSpeed = 1.2;
        starControls.panSpeed = 0.8;

        starControls.noZoom = false;
        starControls.noPan = false;

        starControls.staticMoving = true;
        starControls.dynamicDampingFactor = 0.3;

        starControls.keys = [ 65, 83, 68 ];

        starControls.addEventListener( 'change', renderStar );


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


        var loader = new THREE.TextureLoader();

        var planetGeometry = new THREE.SphereGeometry(self.state.radius, 32, 32)

        var material = new THREE.MeshPhongMaterial()
          if (this.state.radius < 10) {
            material.map = loader.load('/images/mercurymap.jpg')
            material.bumpMap = loader.load('/images/mercurybump.jpg')
          } else if (this.state.radius >= 10 && this.state.radius < 20) {
            material.map = loader.load('/images/marsmap1k.jpg')
            material.bumpMap = loader.load('/images/marsbump1k.jpg')
          } else if (this.state.radius >= 20 && this.state.radius < 50) {
            material.map = loader.load('/images/earthmap1k.jpg')
            material.bumpMap = loader.load('/images/earthbump1k.jpg')
            material.specularMap = loader.load('/images/earthspec1k.jpg')
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
        star.opacity = .5

        // var star = THREEx.Planets.createSun()
        // star.castShadow = true
        // star.receiveShadow = true


        var fieldGeometry  = new THREE.SphereGeometry(2000, 32, 32)
        var fieldMaterial  = new THREE.MeshBasicMaterial()
        fieldMaterial.map   = loader.load('/images/galaxy_starfield.png')
        fieldMaterial.side  = THREE.BackSide
        var fieldMesh  = new THREE.Mesh(fieldGeometry, fieldMaterial)
        var fieldMesh2  = new THREE.Mesh(fieldGeometry, fieldMaterial)
        console.log('fieldmesh2 begin-----------------------------------------')
        console.log(fieldMesh2)
        console.log('fieldmesh2 end-----------------------------------------')


        var hemiLight = new THREE.HemisphereLight(0x000000, 0x000000, 0.6);


        console.log(star)


        var planet = new THREE.Mesh(planetGeometry, material)
        var planet2 = new THREE.Mesh(planetGeometry, material)
        planet.name = self.state.name
        planet.rotation.z = self.state.tilt;

        planetScene.add(planet);
        planetScene.add(fieldMesh2)
        starScene.add(planet2)
        starScene.add(star)
        starScene.add(fieldMesh)
        // starScene.add(spotLight)

        starScene.add(hemiLight)



        var pointLight = new THREE.PointLight(0xFFFAFF);

        pointLight.position.x = 10;
        pointLight.position.y = 10;
        pointLight.position.z = 190;
        console.log('POINTLIGHT!_--------------------------')
        console.log(pointLight)
        console.log('POINTLIGHT!_--------------------------')


        var pointLight2 = new THREE.PointLight(0xFFFAFF);

        pointLight2.position.x = 0;
        pointLight2.position.y = 0;
        pointLight2.position.z = 0;
        pointLight2.castShadow = true;
        pointLight2.intensity = this.state.starBrightness
        pointLight2.color = color
        console.log(pointLight2)

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
              starControls.update();

              requestAnimationFrame( animate );



			  }


        function renderStar(){

          requestAnimationFrame(animate)
          requestAnimationFrame(renderStar)

          var time = performance.now() * 0.001


          planet2.rotation.y += self.state.rotation;
          planet2.position.x = Math.cos( time ) * 500;
          planet2.position.z = Math.sin( time ) * 500;

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
            <div className="controlDiv">
              <form className="PlanetForm" onSubmit={this.handleAddPlanet}>
                <input id="search-box" type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.name}/>
                <button className="btn btn-primary" type="submit" value="post">Add</button>
              </form>
            </div>
            <div className="controlDiv">
              <label>Radius Controls</label>
              <input id="search-box" type="text" placeholder="Radius" onChange={this.handleRadiusChange} value={this.state.radius}/>
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
                <input id="search-box" type="text" placeholder="Rotation" onChange={this.handleRotationChange} value={this.state.rotation}/>
              </form>
              <form className="PlanetForm" onSubmit={this.rotationUp}>
                <button className="btn btn-primary" type="submit" value="post">+</button>
              </form>
              <form className="PlanetForm" onSubmit={this.rotationDown}>
                <button className="btn btn-primary" type="submit" value="post">-</button>
              </form>
            </div>
            <div className="controlDiv">
              <form className="PlanetForm" onSubmit={this.handleSubmit}>
                <label>Axial Tilt</label>
                <input id="search-box" type="text" placeholder="Tilt" onChange={this.handleTiltChange} value={this.state.tilt}/>
              </form>
              <form className="PlanetForm" onSubmit={this.tiltUp}>
                <button className="btn btn-primary" type="submit" value="post">+</button>
              </form>
              <form className="PlanetForm" onSubmit={this.tiltDown}>
                <button className="btn btn-primary" type="submit" value="post">-</button>
              </form>
            </div>

            <div id='star-zone'>
              <div className="controlDiv">
                <label>Star Radius</label>
                <form className="PlanetForm" onSubmit={this.starRadiusUp}>
                  <button className="btn btn-primary" type="submit" value="post">+</button>
                </form>
                <form className="PlanetForm" onSubmit={this.starRadiusDown}>
                  <button className="btn btn-primary" type="submit" value="post">-</button>
                </form>
              </div>
              <div className="controlDiv">
                <label>Star Brightness</label>
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


    ReactDOM.render(<PlanetForm/>, document.getElementById('example'))
