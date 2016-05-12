var React     = require('react'),
    ReactDOM  = require('react-dom'),
    _         = require('lodash');




// lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
//     /* Use data. */
//     }, error: function(code, message){
//     /* Show error message. */
//     }});


var Usersystem = React.createClass({
      getInitialState: function(){
        return {systems: []}
      },

      componentDidMount: function(){
          //  this.props.items = [];
           var self = this;
           $.ajax({
              url: '/account/accountsystems',
              type: 'get',
              dataType: 'json',
              success: function(response){
                console.log(response)
                console.log("here's your damn object")
                // return self.state.items = response;

                response.forEach(function(system){
                  // state = self.state;
                  self.state.systems.push(system);
                  self.setState();
                  // self.setState(state);
                })
              },
              error: function(err){
                console.log(err)
              }
            })
            console.log(self.state.systems)
         },

      render: function(){
        return(
          <table class="table table" id="user-system">

          <thead>
            <tr class="underlined">
              <th>system Name</th>
              <th><center>Edit</center></th>
              <th><center>Export</center></th>
              <th><center>Remove</center></th>

            </tr>
          </thead>

            {
              this.state.systems.map(function(system, i){
                return <systemDiv systemName={system.nameOfsystem} systemID={system._id} contents={system.contents} key={i} />
              }.bind(this))
            }

          </table>

        )
      }
    })

    var systemDiv = React.createClass({
      render: function() {
        return (

            <tr>
              <td>{this.props.systemName}</td>

              <td><center><form action="/systems/viewsystem" method="post"><input type="hidden" name="systemID" value={this.props.systemID} />
              <button type="submit" data-id={this.props.systemID} href="#"><span className="glyphicon  glyphicon-pencil"></span></button></form></center></td>

              <td><center><form action="/systems/viewsystem" method="post"><input type="hidden" name="systemID" value={this.props.systemID} />
              <button type="submit" data-id={this.props.systemID} href="#"><span className="glyphicon  glyphicon-floppy-save"></span></button></form></center></td>

              <td><center><form action="/systems/delete" method="post"><input type="hidden" name="systemID" value={this.props.systemID} />
              <button type="submit" data-id={this.props.systemID} href="#"><span className="glyphicon  glyphicon-trash"></span></button></form></center></td>

            </tr>

        )
      }
    })

    ReactDOM.render(<Usersystem/>, document.getElementById('user-system'))

    // <div draggable="true" className="album-div">
    // <img src={this.state.albumCover} draggable="false" />
    // <p>{this.state.album}</p>
    // <p>{this.state.artist}</p>
    // </div>
