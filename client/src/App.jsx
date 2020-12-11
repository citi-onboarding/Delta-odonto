import React, { Component } from 'react'
import {
	WhoWeAre,
	Footer,
  PostList,
  Contact,
  Banner
} from './components';
import drawerToogleButton from './components/SideDrawer/DrawerToggleButton';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import sideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {
	state = {
		sideDrawerOpen: false
	}

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen}
		});
	}

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	}

	render() {
		//let sideDrawer;
		let backdrop;

		if(this.state.sideDrawerOpen){
			//sideDrawer = <SideDrawer></SideDrawer>;
			backdrop = <Backdrop click={this.backdropClickHandler}></Backdrop>;
		}
		return (
			<div style={{height: '100%'}}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler}></Toolbar>
				<SideDrawer show={this.state.sideDrawerOpen}></SideDrawer>
			
				{backdrop}
				<main style={{marginTop: '64px'}}>
					<p>This is the page content!</p>
					<div>
						<Banner/>
					</div>
					<div>
						{/* <WhoWeAre/> */}
					</div>
					<div>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
					</div>
					<div>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
					</div>
					<div>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
						<p>dfsdfsdfsdfsdfsdfdsfsdf</p>
					</div>
					<div>
						<Contact/>
					</div>
					<div>
						<Footer/>
					</div>
				</main>
			</div>
		);
	};	
}

export default App;
