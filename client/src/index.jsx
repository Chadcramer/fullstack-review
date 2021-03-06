import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    // Send a POST request to your express server
    axios.post('http://localhost:1128/repos', {
      firstName: 'Chad',
      lastName: 'Cramer'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // Your server should GET that user's repos from GitHub's API
    // Your server should then save the repos to the database

    // When a user visits / refreshes your page, your app should:
      // GET the top (how will you determine top?) 25 repos in your express server's database
      // Take those repos and display them on the page
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'));