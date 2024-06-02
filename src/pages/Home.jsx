import { useEffect, useState } from 'react';
import Section from "../components/section";
import Main from "../layouts/main";
import {getNewReleases, getFeaturedPlaylists, getCategories} from "../services/spotifyService"
import CardCategories from '../components/card/cardCategories';
import CardPlaylists from "../components/card/cardPlaylists"
import CardAlbums from '../components/card/cardAlbums';

const Home = () =>{
    const [newReleases, setNewReleases] = useState([]);
    const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        //album
        getNewReleases(20)
            .then(data => {
                setNewReleases(data.albums.items);
            })
            .catch(error => console.error('Error fetching new releases:', error));
        
        //playlist
        getFeaturedPlaylists(20)
            .then(data => {
                setFeaturedPlaylists(data.playlists.items);
            })
            .catch(error => console.error('Error fetching featured playlists:', error));

        // categories
        getCategories(20)
            .then(data => {
                console.log('Categories:', data);
                setCategories(data.categories.items);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return(
        <div className="h-screen max-h-screen w-screen bg-black">
            <Main>
                <Section titleCard='Categories'>
                    <CardCategories data={categories}/>
                </Section>
                
                <Section titleCard="New Releases">
                    <CardAlbums data={newReleases}/>
                </Section>

                <Section titleCard='Featured Playlists'>
                    <CardPlaylists data={featuredPlaylists}/>
                </Section>
                

                {/* <Section 
                title="Categories" 
                data={categories}
                cardTitleClass="text-center" 
                categorieUrl={`categories`}
                /> 
                
                <Section
                title="New Releases" 
                data={newReleases}
                categorieUrl={`albums`}
                />

                <Section 
                title="Featured Playlists" 
                data={featuredPlaylists}
                categorieUrl={`playlist`} 
                /> */}
    
            </Main>
        </div>
    )
}
export default Home