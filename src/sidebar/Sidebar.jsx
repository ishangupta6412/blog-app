import './sidebar.css'

export default function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="" src="https://images.pexels.com/photos/9718961/pexels-photo-9718961.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Technology</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a className="sidebarIcon"><i className="fab fa-facebook-square "></i></a>                    
                    <a className="sidebarIcon"><i className="fab fa-twitter-square "></i></a>                   
                    <a className="sidebarIcon"><i className="fab fa-instagram-square "></i></a>
                    <a className="sidebarIcon"><i className="fab fa-linkedin "></i></a>   
                </div>
            </div>

        </div>
        </>
    )
}
