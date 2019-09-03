const LOAD_SONGS = 'LOAD_SONGS';
const songList = [
    'Birds',
    'Riptide'
];

export const loadSongs = () => dispatch => {
    setTimeout(() => {
        console.log('Songs returned');
        dispatch({type: LOAD_SONGS, payload: songList});
    }, 2000)
}