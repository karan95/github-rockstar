import React from 'react';
import './index.css';
import Table from '../table';
import * as RepoAPI from '../../api/repositories';
import * as UserAPI from '../../api/users';

/**
 * Dashboard Component
 * 
 */

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayData: [],
            isRepoTabActive: false,
            isUsersTabActive: false
        };
    }

    async getReposData() {
        // clear interval for getFollowers
        if (this.followersInterval) {
            console.log('2 minutes timer ended.');
            clearInterval(this.followersInterval);
            this.followersInterval = null;
        };
        const repos = await RepoAPI.getTopRepositories();
        this.setState({ isRepoTabActive: true, isUsersTabActive: false })
        if (repos.error) {
            // handle error
        } else {
            let repoData = [];
            for (let repo of  repos.data.items) {
                repoData.push({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    stars: repo.stargazers_count,
                    forks: repo.forks
                })
            }
            // update table data
            this.setState({ displayData: repoData });
        }
    }

    async getUsersData() {
        const users = await UserAPI.getTopUsers();
        this.setState({ isUsersTabActive: true, isRepoTabActive: false })
        if (users.error) {
            // handle error
        } else {
            const usersData = [];
            for (let user of  users.data.items) {
                usersData.push({
                    id: user.id,
                    login: user.login,
                    avatar: <img src={user.avatar_url} className='img-thumbnail' alt=''/>,
                    followers: 0
                })
            }
            this.setState({ displayData: usersData });
            this.getFollowers();
            // start 2 minutes timer
            this.followersInterval = setInterval(this.getFollowers.bind(this), 1000 * 120);
            console.log('2 minutes timer started.')
        }
    }

    async getFollowers() {
        const userList = this.state.displayData;
        for (let user of userList) {
            // get followers for each user
            const userRes = await UserAPI.getFollowersOfUser(user.login);
            if (userRes.data) user['followers'] = userRes.data.followers;
        }
        this.setState({ displayData: userList });
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-8 header-title">Welcome to GitHub Rockstar</h1>
                <div className="" data-toggle="buttons">
                    <button type="button" id="hot_repo" onClick={() => this.getReposData()} className={`btn btn-outline-primary ${this.state.isRepoTabActive && 'active'}`}>Get Top Repositories</button>
                    <button type="button" id="prolific_users" onClick={() => this.getUsersData()} className={`btn btn-outline-primary left-margin ${this.state.isUsersTabActive && 'active'}`}>Get Top Users</button>
                </div>
                <div className="list-view-container">
                    { this.state.displayData.length > 0 ? <Table data={this.state.displayData}/> : <p>There are no records to display!</p> }
                </div>
            </div>
        );
    }
}

export default Dashboard;
