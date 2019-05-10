import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = {
        albumsList: []
    }
    componentWillMount(){
        // debugger;
        console.log("component will mount called");
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albumsList: response.data}));

    }
    render() {
        return (
            <View>
                {this.state.albumsList.map( album => <Text>{album.title}</Text>)}
            </View>
        )
    }
}

export default AlbumList