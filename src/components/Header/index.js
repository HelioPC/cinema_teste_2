import './header.css';

export default function Header({back}) {
    return(
        <header className={back ? 'black' : ''}>
            <div className='header-logo'>
                <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='default' />
                </a>
            </div>

            <div className='header-search'>
                <label style={{fontSize: '90%'}}>Sort by</label>
                <select name="select" className='select'>
                    <option value={0} style={{
                          display: 'none',
                          visibility: 'hidden',
                          paddingRight: '10px'
                    }}>Sugestion for you</option>
                    <option value="netflix">Originais da netflix</option>
                    <option value="trending">Trending</option>
                    <option value="toprated">Top rated</option>
                    <option value="action">Ação</option>
                    <option value="comedy">Comédia</option>
                    <option value="romance">Romance</option>
                    <option value="horror">Terror</option>
                    <option value="documentary">Documentário</option>
                </select>
            </div>
        </header>
    )
}
