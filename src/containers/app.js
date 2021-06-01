import react, { Component } from 'react';
import Cardlist from '../components/cardlist';
import Searchbox from '../components/searchbox';
import Scroll from '../components/scroll';
import './app.css';

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots:users}));
    }
        onSearchChange = (event) => {
         this.setState({searchfield: event.target.value})
        }
        render(){
            const{robots,searchfield}=this.state;
            const filteredrobots =robots.filter(robots =>{
                return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    
            })
            return(
                <div className='tc'>
        
              
                  <h1 className='f1'>RoboFriends</h1>
                  <Searchbox searchChange={this.onSearchChange}/>
                  <Scroll><Cardlist robots={filteredrobots} /></Scroll>
                  
             </div>
        
            );
        }
        
        

        
        
      

    
}
    

    
  
export default App;