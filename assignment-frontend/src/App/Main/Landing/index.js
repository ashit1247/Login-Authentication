import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import withStore from "../../../Components/Unstated/withStore";
import MainStore from "../../../Store/mainStore";
import { Button, IconButton, Menu } from "@material-ui/core";
import Data from './data/data.json';
// import { Button } from "@material-ui/core";
import { logoutUser } from "../../../API/services";


const Landing = ({ mainStore: { state, init, setActiveContent }, history }) => {
  const classes = useStyles();

  const [list, setList]=useState(false);

  const dataShow=()=>{
    setList(!list);
  }

  const handleLogout = async () => {
    await logoutUser(state.user);
    localStorage.removeItem("user")

    window.location.reload()
  }
  return (
    <div>
      {/* <AppBar position="relative">
        <Toolbar>
          <Button onClick={handleLogout}>Logout</Button>
          </Toolbar>
      </AppBar> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <div className="container" style={{ marginTop: '100px', marginBottom: '150px', border: '1px solid blue', borderRadius: '5px', padding: '20px' }}>
        <h2>Upload your file</h2>
        <p>file size should be less than 30 MB.</p>
        <form>
          <div className="form-group">
            <input type="file" className="form-control-file border" name="file" />
          </div>
          <span style={{display:'inline-block'}}>
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
          
        </form>
        <span style={{display:'inline-block',margin:'10px 0'}}>
            <button type="submit" className="btn btn-primary" onClick={dataShow}>ShowList</button>
          </span>
      </div>
      

      <div className="container">
        <div id="items" className="my-4" style={{ marginBottom: '300px' }}>
          <h2>Your Items</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>

              </tr>
            </thead>
            <tbody id="tableBody">
              {
                list?Data.map((user)=>{

                  return(
                    <tr>
                  <td scope="row">{user.id}</td>
                  <td>{user.userId}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                </tr>
                  );
                  
                }):null
              }
              


            </tbody>
          </table>
        </div>
      </div>


      <div className="container-fluid" style={{ backgroundColor: 'rgb(32, 32, 32)', color: 'white' }}>
        <div className="row">
          <div className="col-sm-3 offset-1" style={{ marginTop: '30px' }}>
            <h3>Recent posts</h3>
            <p><a href="#">Recent posts on survey</a></p>
            <p><a href="#">Summer and winter campign</a></p>
            <p><a href="#">Upcoming events</a></p>
          </div>
          <div className="col-sm-3 offset-1" style={{ marginTop: '30px' }}>
            <h3>Categories</h3>
            <p><a href="#">Anxiety</a></p>
            <p><a href="#">Lifestyle</a></p>
            <p><a href="#">Cause and Symptoms</a></p>
            <p><a href="#">Cure and Treatments</a></p>
          </div>
          <div className="col-sm-3 offset-1">
            <div id="chat" style={{
              height: '135px',
              width: '75%',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '15px',
              marginTop: '30px',
              textAlign: 'center',
              padding: '25px'
            }}>
              Be a part of our family!!
                    <form>
                <input type="text" name="name" placeholder="Enter your name"
                  style={{ border: 'none', textAlign: 'center' }} /><br />
                <button className="btn btn-primary">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>

        <hr style={{ color: 'white' }} />
        <div className="row">
          <div className="col-sm-6 offset-1">
            <a href="index.html">HOME</a>
            <a href="#">PRIVACY</a>
            <a href="#">SELF TESTS</a>
            <a href="#">OUR TEAM</a>
            <a href="#">CONTACT US</a>
            <a href="#">KNOW MORE</a>
          </div>
          <div className="col-sm-4 offset-1">
            <p>MakeBetter|<span>&#169;</span>Copyright 2021</p>
          </div>
        </div>
      </div>

    </div>
  )
};
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default withStore([MainStore])(Landing);
