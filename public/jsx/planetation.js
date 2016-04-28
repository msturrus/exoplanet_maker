var React     = require('react'),
    ReactDOM  = require('react-dom'),
    _         = require('lodash');







var PlanetForm = React.createClass({
      getInitialState: function(){
        return {planets: []}
      },

      handleRadiusChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.radius = event.target.value;
        this.setState(state);
        console.log(this.state)
      },

      handleimgURLChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.imgURL = event.target.value;
        this.setState(state);
        console.log(this.state)
      },
      handleartistChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.artist = event.target.value;
        this.setState(state);
        console.log(this.state)
      },
      handlealbumChange: function(event){
        console.log(event.target.value)
        var state = this.state;
        state.album = event.target.value;
        this.setState(state);
        console.log(this.state)
      },
      handleSubmit: function(event){
        event.preventDefault();
        var self = this;
        console.log(this);



              state.planets.push(albumInfo);
              var albumName = data.results.albummatches.album[0].name;
              var albumCover = data.results.albummatches.album[0].image[2]["#text"];
              var albumArtist = data.results.albummatches.album[0].artist;

              state.imgURL = albumCover;
              state.artist = albumArtist;
              state.album = albumName;

              self.setState(state);

              console.log(self.state.albums);


            }, error: function(code, message){
            /* Show error message. */
            }});
      },
      render: function(){
        return(
          <div id="results-container">
            <form className="PlanetForm" onSubmit={this.handleSubmit}>
              <input id="search-box" type="text" placeholder="Search for an album" onChange={this.handleRadiusChange} value={this.state.radius}/>
              <button className="btn btn-primary" type="submit" value="post">Search</button>
            </form>
            <div id='results-zone'>
            {
              this.state.planets.map(function(planet, i){
                return <PlanetDiv radius={planet.radius} location={1} key={i} />
              }.bind(this))
            }
            </div>
          </div>

        )
      }
    })

    var PlanetDiv = React.createClass({
      render: function() {
        return (

          var planetGeometry = new THREE.SphereGeometry({this.props.radius}, 32, 32)

          var material = new THREE.MeshLambertMaterial()

          var planetMesh = new THREE.Mesh(sunGeometry, material)
          scene.add(planetMesh)

          var planet = new THREE.Mesh(sunGeometry, material)

          scene.add(planet);

        )
      }
    })

    ReactDOM.render(<PlanetForm/>, document.getElementById('example'))

    // material.map  = THREE.TextureLoader('mars_1k_color.jpg')

    // <div draggable="true" className="album-div">
    // <img src={this.state.albumCover} draggable="false" />
    // <p>{this.state.album}</p>
    // <p>{this.state.artist}</p>
    // </div>
